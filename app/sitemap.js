import { getBlogs } from "@/sanity/sanity-utils";
export const revalidate = 30;
export default async function sitemap() {
  const blogs = await getBlogs();
  const post = blogs.map((item) => ({
    url: `https://business.max-bezs.com/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));
  return [
    {
      url: "https://business.max-bezs.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://business.max-bezs.com/pricing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://business.max-bezs.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    ...post,
  ];
}
