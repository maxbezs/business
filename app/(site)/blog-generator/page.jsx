"use client";
import { useState } from "react";
import OpenAI from "openai";
import BlockContent from "@sanity/block-content-to-react";
import H1 from "../components/H1";
import H2 from "../components/H2";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { addBlog } from "@/sanity/sanity-utils";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const BlogGenerator = () => {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backup, setBackup] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: JSON.stringify({
              type: "text",
              text: "Generate JSON of a comperhansive blog post about topic provided by user. The blog post content structure follows:{heading:[topic provided by user], paragraph:[short max 120 characters paragraph about blog post], ctaSectionHeading: [Engaging heading related to blog post topic], ctaSectionParagraph: [Engaging paragraphrelated to ctaSectionHeading motivates person to subscribe to web development agency subscription], ctaSectionButtonText: [up to 3 words], tags:[tags related to the blog post],introduction:[engaging paragraph],    sections: [h2: [heading for paragraph], paragraph: [paragraph text] or list:[type: [bullet or number],list content[minimum 3 components]...complete the rest finishing with conclusion] also include  lists bulletpoint or numeric one if it suites topic ",
            }),
          },
          {
            role: "user",
            content: JSON.stringify({
              type: "text",
              text: title,
            }),
          },
        ],
        temperature: 1,
        max_tokens: 1500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      const responseData = JSON.parse(apiResponse.choices[0].message.content);
      console.log(JSON.stringify(responseData));
      const transformedSanityObject =
        transformResponseToSanityObject(responseData);
      setBackup(JSON.stringify(responseData));

      setResponse(transformedSanityObject);
    } catch (error) {
      console.error(error);
      setResponse("An error occurred while generating the blog post.");
      setBackup(JSON.stringify(response));
    } finally {
      setLoading(false);
    }
  };
  const transformResponseToSanityObject = (responseData) => {
    const sanityObject = {
      _type: "blogBlock",
      content: [],
      ctaButtonText: responseData.ctaSectionButtonText,
      ctaHeading: responseData.ctaSectionHeading,
      ctaParagraph: responseData.ctaSectionParagraph,
      heading: responseData.heading,
      highlighted: false,
      paragraph: responseData.paragraph,
      poster: {
        _type: "image",
        asset: {
          _ref: "image-2c611fe816da517c00c299c8ff9e536c2156a5c5-1848x782-jpg",
          _type: "reference",
        },
      },
      slug: {
        _type: "slug",
        current: "blog/",
      },
    };
    if (responseData.introduction) {
      sanityObject.content.push({
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: [],
            text: responseData.introduction,
          },
        ],
      });
    }

    responseData.sections.map((section) => {
      if (section.h2) {
        sanityObject.content.push({
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              marks: [],
              text: section.h2,
            },
          ],
        });
      }

      if (section.paragraph) {
        sanityObject.content.push({
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              marks: [],
              text: section.paragraph,
            },
          ],
        });
      }

      if (section.list) {
        section.list.listContent.forEach((item) => {
          sanityObject.content.push({
            _type: "block",
            listItem: section.list.type,
            style: "normal",
            level: 1,
            children: [
              {
                _type: "span",
                text: item,
              },
            ],
          });
        });
      }
    });
    if (responseData.conclusion) {
      sanityObject.content.push(
        {
          _type: "block",
          style: "h2",
          children: [
            {
              _type: "span",
              marks: [],
              text: "Conclusion",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              marks: [],
              text: responseData.conclusion,
            },
          ],
        }
      );
    }
    return sanityObject;
  };

  const serializers = {
    types: {
      block: (props) => {
        switch (props.node.style) {
          case "h1":
            return <H1 key={props.node._key}>{props.children}</H1>;
          case "h2":
            return <H2 key={props.node._key}>{props.children}</H2>;
          default:
            return (
              <Paragraph key={props.node._key}>{props.children}</Paragraph>
            );
        }
      },
    },
  };
  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const blogpost = await addBlog(response);
      console.log("Blog added successfully:", blogpost);
      setSuccessMessage("Blog post added successfully!"); // Set success message
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="flex items-center flex-col">
      <H1>Blog Post Generator</H1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <textarea
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog post title"
          required
          className="rounded-lg bg-neutral-900 border-transparent text-white px-4 py-2 w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-neutral-700 text-white font-cfont align-baseline rounded-lg cursor-pointer select-none py-3 px-4 no-underline w-fit"
        >
          {loading ? "Generating..." : "Generate Blog Post"}
        </button>
      </form>
      <div className="flex w-full p-4 gap-4 flex-col sm:flex-row">
        {response && (
          <div className="sm:w-1/2  overflow-auto	bg-neutral-900 p-4 rounded-lg">
            <h2>Generated Blog Post Structure</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
        {response && (
          <div className="sm:w-1/2 overflow-auto	bg-neutral-900 p-4 rounded-lg">
            <H1 key={response.heading}>{response.heading}</H1>
            <div className="mt-4 prose lg:prose-xl dark:prose-invert w-full">
              <BlockContent
                blocks={response?.content}
                serializers={serializers}
                projectId="v1ithwqy"
                dataset="production"
              />
            </div>
            <div className=" flex flex-col my-12 mx-auto max-w-4xl ">
              <H2 key={response.ctaHeading}>{response.ctaHeading}</H2>
              <Paragraph key={response.ctaParagraph}>
                {response.ctaParagraph}
              </Paragraph>
              <Button href="/pricing">{response.ctaButtonText}</Button>
            </div>
          </div>
        )}
      </div>
      {response && (
        <form onSubmit={handlePost}>
          <button
            type="submit"
            disabled={loading}
            className="bg-neutral-700 my-4 text-white font-cfont align-baseline rounded-lg cursor-pointer select-none py-3 px-4 no-underline w-fit"
          >
            {loading ? "Posting..." : "Post Blog Post"}
          </button>{" "}
        </form>
      )}
      {successMessage && (
        <div className="bg-green-500 text-white p-4 rounded-lg my-4">
          {successMessage}
        </div>
      )}
      {backup && (
        <div className="sm:w-1/2  overflow-auto	bg-neutral-900 p-4 rounded-lg">
          <h2>backup</h2>
          <pre>{JSON.stringify(backup)}</pre>
        </div>
      )}
    </div>
  );
};

export default BlogGenerator;
