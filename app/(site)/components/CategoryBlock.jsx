import React from "react";
import Button from "./Button";

const CategoryBlock = ({ href, industry, heading, paragraph, buttonText }) => {
  return (
    <div className="bg-neutral-950 p-6 flex-col justify-between border-neutral-800 w-full rounded-md border flex drop-shadow-[0_0px_1px_rgba(256,256,256,0.78)] ">
      <div>
        <p className="text-sm mb-2 font-light	">{industry}</p>
        <h2 className="text-2xl font-bold mb-2 ">{heading}</h2>
        <p className="mb-4">{paragraph}</p>
      </div>
      <Button href={href}>{buttonText}</Button>
    </div>
  );
};

export default CategoryBlock;
