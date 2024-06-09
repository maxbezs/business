import React from "react";
import BlogBlock from "../components/BlogBlock";
import { getBlogs } from "@/sanity/sanity-utils";
export const revalidate = 0;
export const metadata = {
  title: "Insights and Innovations: Explore Our Latest Blog Posts",
  description:
    "Dive into our blog for a wealth of knowledge on the latest trends in web and app development, business strategies, and technological innovations. Our expertly crafted articles offer valuable insights, tips, and thought leadership to help you stay ahead in your industry. Whether you're a budding entrepreneur or a seasoned business leader, our blog is your go-to resource for inspiration and practical advice to drive your business forward.",
  keywords: [
    "Latest Tech Trends",
    "Web Development Insights",
    "Entrepreneurial Strategies",
    "Innovative Business Solutions",
    "App Development Tips",
    "Industry Thought Leadership",
    "Business Growth Tactics",
    "Cutting-Edge Technologies",
    "Expert Advice and Tips",
    "Success-Driven Blog Posts",
  ],
  author: "max_bezs",
  creator: "max_bezs",
  publisher: "max_bezs",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  icons: {
    other: [
      {
        rel: "image_src",
        url: "https://business.max-bezs.com/listmax.jpg",
      },
    ],
  },
  openGraph: {
    title: "Insights and Innovations: Explore Our Latest Blog Posts",
    description:
      "Dive into our blog for a wealth of knowledge on the latest trends in web and app development, business strategies, and technological innovations. Our expertly crafted articles offer valuable insights, tips, and thought leadership to help you stay ahead in your industry. Whether you're a budding entrepreneur or a seasoned business leader, our blog is your go-to resource for inspiration and practical advice to drive your business forward.",
    url: "https://business.max-bezs.com/blog",
    siteName: "max_bezs Business",

    images: [
      {
        url: "https://business.max-bezs.com/listmax.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};
export default async function Blog() {
  const blogs = await getBlogs();
  const highlightedBlogs = blogs.filter((blog) => blog.highlighted);
  const regularBlogs = blogs.filter((blog) => !blog.highlighted);
  regularBlogs.sort(
    (a, b) =>
      new Date(comparedTimes(b._createdAt, b._updatedAt)) -
      new Date(comparedTimes(a._createdAt, a._updatedAt))
  );
  function comparedTimes(createdAt, updatedAt) {
    return new Date(updatedAt) - new Date(createdAt) > 0
      ? updatedAt
      : createdAt;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      _type: "blogBlock",
      heading: "HEADING",
      paragraph: "PARAGRAPH",
      // Add more fields here as needed
    };

    try {
      const response = await addBlog(data);
      console.log("Blog added successfully:", response);
      // Clear the form fields after successful submission
      // Clear other fields if needed
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };
  return (
    <div className="my-8 px-8 mx-auto max-w-6xl">
      <form onSubmit={handleSubmit}>
        {/* Add more input fields for other blog data */}
        <button type="submit">Add Blog</button>
      </form>
      {highlightedBlogs.map((block) => (
        <BlogBlock
          key={block.slug}
          href={block.slug}
          heading={block.heading}
          paragraph={block.paragraph}
          poster={block.poster}
          date={comparedTimes(block._createdAt, block._updatedAt)}
          highlighted
        />
      ))}

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {regularBlogs.map((block) => (
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
  );
}
