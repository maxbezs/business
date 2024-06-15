import React from "react";
import Button from "../../components/Button";
import H1 from "../../components/H1";
import Image from "next/image";
import Link from "next/link";
import { getBlog, getExploreBlogs } from "@/sanity/sanity-utils";
import Paragraph from "../../components/Paragraph";
import H2 from "../../components/H2";
import H3 from "../../components/H3";
import Time from "../../components/Time";
import BlogBlock from "../../components/BlogBlock";
export const revalidate = 0;
import BlockContent from "@sanity/block-content-to-react";
export default async function page({ params }) {
  const blog = await getBlog("blog/" + params.blogid);
  console.log(blog);
  const exploreBlogs = await getExploreBlogs();

  function calculateReadingTime(jsonData) {
    const wordsPerMinute = 275;
    let text = "";
    // Function to recursively extract text from content
    function extractText(content) {
      if (Array.isArray(content)) {
        content.forEach((item) => {
          if (item.children && Array.isArray(item.children)) {
            item.children.forEach((child) => {
              if (child.text) {
                text += child.text + " ";
              }
            });
          }
        });
      }
    }
    extractText(jsonData.content);
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
    return readingTimeMinutes;
  }
  function comparedTimes(createdAt, updatedAt) {
    return new Date(updatedAt) - new Date(createdAt) > 0
      ? updatedAt
      : createdAt;
  }
  const serializers = {
    types: {
      block: (props) => {
        switch (props.node.style) {
          case "h1":
            return <H1>{props.children}</H1>;
          case "h2":
            return <H2>{props.children}</H2>;
          case "h3":
            return <H3>{props.children}</H3>;
          case "blockquote":
            return <blockquote>{props.children}</blockquote>;
          default:
            return <Paragraph>{props.children}</Paragraph>;
        }
      },
    },
  };
  return (
    <div className="pt-4">
      <div className="flex-col mx-auto max-w-4xl px-8">
        <div className="mb-4">
          <Link href="/blog" className="text-gray-500 ">
            ← Back to Blog
          </Link>
        </div>

        <H1 className="leading-none		">{blog?.heading}</H1>
        <div className="flex gap-x-1">
          <Time
            dateTime={comparedTimes(
              blog?._createdAt || 0,
              blog?._updatedAt || 0
            )}
          />
          <p>• {calculateReadingTime(blog || "no data")} minutes read</p>
        </div>
        <div className=" flex items-center gap-x-4 my-4">
          <Image
            src="/business-logo-small.png"
            width="40"
            height="40"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-200">max_bezs</p>
            <p className="text-gray-200 dark:text-gray-400">CTO</p>
          </div>
        </div>
        <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
          <Image
            alt={blog?.heading}
            width="1600"
            height="800"
            className="w-full h-[30rem] sm:h-[20rem] object-cover group-hover:scale-105 transition"
            src={blog?.poster}
          />
        </div>

        <div className="mt-4 prose lg:prose-xl dark:prose-invert w-full">
          <BlockContent
            blocks={blog?.content}
            projectId="v1ithwqy"
            dataset="production"
            serializers={serializers}
          />
        </div>
        <div className=" flex flex-col my-12 mx-auto max-w-4xl ">
          <H2>{blog?.ctaHeading}</H2>
          <Paragraph>{blog?.ctaParagraph}</Paragraph>
          <Button href="/pricing">{blog?.ctaButtonText} </Button>
        </div>
      </div>
      <div className="mt-12 max-w-6xl mx-auto px-8 lg:px-0">
        <H2>Explore More</H2>
        <div className="my-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {exploreBlogs.map((block) => (
            <BlogBlock
              key={block.slug}
              href={block.slug}
              heading={block.heading}
              paragraph={block.paragraph}
              poster={block.poster}
              date={comparedTimes(block._createdAt, block._updatedAt)}
              highlighted={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
