import React from "react";
import { getScopes } from "@/sanity/sanity-utils";
import CategoryBlock from "./components/CategoryBlock";
import H1 from "./components/H1";

export default async function QWERTY() {
  const categories = await getScopes();
  return (
    <div className="container mx-auto p-4">
      <H1 className="text-4xl font-bold text-center mb-4">
        ALL in ONE solution for ALL Businesses
      </H1>
      {/*<div className="mb-8">
        <input
          className="form-input mt-1 block w-full border-2 p-3 rounded-full"
          type="text"
          placeholder="Find ur industry, service or business"
        />
  </div>*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
