import { getScopes } from "@/sanity/sanity-utils";
import H1 from "./components/H1";
import SearchBar from "./components/SearchBar";
export const revalidate = 0;
export const metadata = {
  title: "max_bezs: Your Partner in Digital Excellence and Business Growth",
  description:
    "Max_bezs: Elevating businesses in the digital age with advanced web/app development, enhanced digital presence, and streamlined operations for growth.",
};
export default async function Home() {
  const categories = await getScopes();
  return (
    <div className="container mx-auto p-4">
      <H1 className="text-center max-w-4xl mx-auto leading-tight		 ">
        Step-by-step guide to maximize Your business
      </H1>

      <SearchBar categories={categories} />
    </div>
  );
}
