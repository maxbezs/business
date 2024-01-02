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
          placeholder="Search..."
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
        <p>No Matching Business</p>
      )}
    </>
  );
};

export default SearchBar;
