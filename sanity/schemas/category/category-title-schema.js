const categoryTitle = {
  name: "categoryTitle",
  title: "Category Title",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categoryBlock" }] }],
    },
  ],
};

export default categoryTitle;
