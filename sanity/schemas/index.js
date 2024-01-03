import categoryBlock from "./category/category-block-schema";
import scope from "./scope/scope-schema";
import categoryTitle from "./category/category-title-schema";
import scopePage from "./scope/scope-page-schema";
import categoryPage from "./category/category-page/category-page-schema";
import categoryPageBlock from "./category/category-page/category-page-block-schema";
import blogBlock from "./blog/blog-block-schema";
import faq from "./pricing/faq-schema";
const schemas = [
  scope,
  scopePage,
  categoryBlock,
  categoryTitle,
  categoryPage,
  categoryPageBlock,
  blogBlock,
  faq,
];
export default schemas;
