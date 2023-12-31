"use client";
import React, { useState } from "react";

function MyAccordionComponent({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-full my-5">
      <div id="faq__question">
        <button
          className={` focus:outline-none  flex w-full items-center justify-between first:rounded-t-md last:rounded-b-md py-5 px-5 text-left font-medium  border-neutral-800  border ${
            isOpen
              ? "bg-neutral-900 border-b border-gray-200"
              : "bg-neutral-950 hover:drop-shadow-[0_0px_4px_rgba(256,256,256,0.78)] drop-shadow-[0_0px_1px_rgba(256,256,256,0.78)]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-lg font-medium">{question}</h2>
          <span>
            {isOpen ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-6 w-6 shrink-0 rotate-180"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-6 w-6 shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </span>
        </button>
        {isOpen && (
          <div className=" rounded-b-md p-5 border border-white/[0.15]">
            <p className="mb-2 ">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyAccordionComponent;
