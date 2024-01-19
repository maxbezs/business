import Image from "next/image";
import React from "react";
import Time from "./Time";

function BlogBlock({ href, heading, paragraph, poster, date, highlighted }) {
  return (
    <>
      {highlighted ? (
        <a className="group lg:grid grid-cols-3 gap-x-10" href={href}>
          <div className="col-span-2 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
            <Image
              alt={heading}
              width="1600"
              height="800"
              className="w-full h-auto object-cover group-hover:scale-105 transition"
              src={poster}
            />
          </div>
          <div className="col-span-1">
            <div className="mt-5 text-gray-500 dark:text-gray-400 flex items-center text-[14px] space-x-1.5">
              <Time dateTime={date} />
            </div>
            <h1 className="mt-3 text-gray-900 dark:text-gray-100 text-2xl">
              {heading}
            </h1>
            <h2 className="mt-3 text-gray-500 dark:text-gray-400 leading-relaxed">
              {paragraph}
            </h2>
            <div className="mt-6 flex items-center space-x-3.5">
              <div>
                <Image
                  alt="Author"
                  width="80"
                  height="80"
                  className="h-10 w-10 rounded-full"
                  src="/business-logo-small.png"
                />
              </div>
              <div className="text-[14px]">
                <p className="text-gray-700 dark:text-gray-300">max_bezs</p>
                <p className="text-gray-500 dark:text-gray-400">CTO</p>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <a className="group" href={href}>
          <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
            <Image
              alt={heading}
              width="800"
              height="400"
              className="w-full h-[15rem] sm:h-[13rem] object-cover group-hover:scale-105 transition"
              src={poster}
            />
          </div>
          <h1 className="mt-5 text-gray-900 dark:text-gray-100 text-lg">
            {heading}
          </h1>
          <h2 className="mt-3 text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed">
            {paragraph}
          </h2>
          <div className="mt-6 flex items-center space-x-3">
            <Image
              alt="Author"
              width="80"
              height="80"
              className="h-6 w-6 rounded-full"
              src="/business-logo-small.png"
            />
            <div className="text-gray-500 dark:text-gray-400 flex items-center text-[14px] space-x-1.5">
              <p className="text-gray-700 dark:text-gray-300">max_bezs</p>
              <p>•</p>
              <Time dateTime={date} />
            </div>
          </div>
        </a>
      )}
    </>
  );
}

export default BlogBlock;
