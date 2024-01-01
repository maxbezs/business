import React from "react";

const Search = ({ children }) => {
  return (
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
        {children}
      </div>
    </div>
  );
};

export default Search;
