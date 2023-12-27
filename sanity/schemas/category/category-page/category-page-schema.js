const categoryPage = {
  name: "categoryPage",
  title: "Category Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.title}`,
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
      title: "Small/Middle/Large",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categorypageblock" }] }],
    },
  ],
};

export default categoryPage;
