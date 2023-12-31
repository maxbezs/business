import React from "react";
import { getScopes } from "@/sanity/sanity-utils";
import CategoryBlock from "./components/CategoryBlock";
import H1 from "./components/H1";

export default async function QWERTY() {
  const categories = await getScopes();
  return (
    <div className="container mx-auto p-4">
      <H1 styles="text-center max-w-4xl mx-auto leading-tight		 ">
        Step-by-step guide to maximize Your business
      </H1>

      <div className="mx-auto py-2  text-[0.875rem] max-w-3xl  ">
        <div className="border-neutral-500 w-full rounded-md border flex items-center drop-shadow-[0_0px_1px_rgba(256,256,256,0.78)] hover:drop-shadow-[0_0px_4px_rgba(256,256,256,0.51)]">
          <span className="bg-neutral-950 rounded-l-md flex-shrink-0 relative text-[#8f8f8f] h-10 pl-3 flex items-center justify-center">
            <svg
              fillRule="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
              <path d="M16 16l4.5 4.5"></path>
            </svg>
          </span>
          <input
            placeholder="Search..."
            aria-label="Search"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            className=" bg-neutral-950  text-white border-none px-3 h-10 rounded-r-md outline-none search-cancel:appearance-none w-full"
            spell-check="false"
            type="search"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 mb-20 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <CategoryBlock
            key={index}
            href={category.slug.current}
            industry={category.industry}
            heading={category.heading}
            paragraph={category.paragraph}
            buttonText={category.buttonText}
          />
        ))}
      </div>
    </div>
  );
}
