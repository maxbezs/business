const blogBlock = {
  name: "blogBlock",
  title: "Blog Block",
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
      type: "string",
      validation: (Rule) =>
        Rule.max(180).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `blog/${doc.heading}`,
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
    { name: "highlighted", title: "Highlighted Blog", type: "boolean" },
    {
      name: "poster",
      title: "Poster",
      type: "image",
    },
    {
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
    },
    {
      name: "ctaParagraph",
      title: "CTA Paragraph",
      type: "string",
      validation: (Rule) =>
        Rule.max(200).warning(`A title shouldn't be more than 120 characters.`),
    },
    {
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
    },
    {
      type: "markdown",
      description: "page content",
      name: "Content",
    },
  ],
};

export default blogBlock;
