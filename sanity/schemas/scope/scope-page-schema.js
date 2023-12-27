const scopePage = {
  name: "scopepage",
  title: "Scopes' Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          { title: "Technology", value: "technology" },
          { title: "Finance", value: "finance" },
          { title: "Healthcare", value: "healthcare" },
          { title: "Hospitality", value: "Hospitality" },
          { title: "Retail", value: "retail" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.industry}/${doc.title}`,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with hyphens
            .replace(/&/g, "and") // Replace '&' with 'and'
            .replace(/%/g, "percent") // Replace '%' with 'percent'
            .replace(/\$/g, "usd") // Replace '$' with 'dollar'
            .replace(/#/g, "hashtag") // Replace '#' with 'number'
            .replace(/\*/g, "star") // Replace '*' with 'star'
            .replace(/@/g, "at") // Replace '@' with 'at'
            .replace(/[\/?#]/g, "/") // Keep forward slashes
            .replace(/[^a-z0-9-/]/g, "") // Remove other special characters
            .slice(0, 200),
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categoryTitle" }] }],
    },
  ],
};
export default scopePage;
