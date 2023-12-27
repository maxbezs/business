const categoryBlock = {
  name: "categoryBlock",
  title: "Category Block",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "paragraph",
      title: "Paragraph",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.heading}`,
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
  ],
};

export default categoryBlock;
