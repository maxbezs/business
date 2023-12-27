import React from "react";
import BlogBlock from "../components/BlogBlock";
import { getBlogs } from "@/sanity/sanity-utils";
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
  return (
    <div className="my-8 px-8 mx-auto max-w-6xl">
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
