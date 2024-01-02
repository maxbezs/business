"use client";
import { useState } from "react";
import CategoryBlock from "./CategoryBlock";
import Search from "./Search";

const SearchBar = ({ categories }) => {
  const [query, setQuery] = useState("");

  const filteredData = categories.filter(
    (item) =>
      item.heading.toLowerCase().includes(query.toLowerCase()) ||
      item.paragraph.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <Search>
        <input
          placeholder="Search Business"
          aria-label="Search"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          className=" bg-neutral-950  text-white border-none px-3 h-10 rounded-r-md outline-none search-cancel:appearance-none w-full"
          spell-check="false"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Search>
      {filteredData?.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 mb-20 max-w-6xl mx-auto">
          {filteredData.map((category, index) => (
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
      ) : (
        <div className="flex flex-col items-center justify-center border border-neutral-800 rounded-lg max-w-3xl mx-auto p-24 lg:p-36">
          <div className="border  border-neutral-800  rounded-full w-[70px] h-[70px] mb-6 relative flex items-center justify-center ">
            <svg
              className="shape-rendering-crisp flex-shrink-0 text-[#444] w-[24px] h-[24px]"
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
              <path d="M16 16l4.5 4.5"></path>
            </svg>
            <span className="absolute bottom-0 right-[-4px] text-black  w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg
                data-testid="geist-icon"
                fill="none"
                height="16"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </span>
          </div>
          <p>No Matching Business</p>
        </div>
      )}
    </>
  );
};

export default SearchBar;
