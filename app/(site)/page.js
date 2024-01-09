import { getScopes } from "@/sanity/sanity-utils";
import H1 from "./components/H1";
import SearchBar from "./components/SearchBar";
export const revalidate = 0;
export const metadata = {
  title: "max_bezs: Your Partner in Digital Excellence and Business Growth",
  description:
    "max_bezs is dedicated to solving the critical challenges that business owners face in the digital era. Our services, including advanced web and app development, are specifically designed to enhance your digital presence, improve customer engagement, and streamline your operations. With our expertise, you can effortlessly overcome common business obstacles such as low online visibility, inefficient processes, and adapting to new tech trends. Let us help you harness the power of technology to propel your business towards remarkable growth and success.",
};
export default async function QWERTY() {
  const categories = await getScopes();
  return (
    <div className="container mx-auto p-4">
      <H1 styles="text-center max-w-4xl mx-auto leading-tight		 ">
        Step-by-step guide to maximize Your business
      </H1>

      <SearchBar categories={categories} />
    </div>
  );
}
