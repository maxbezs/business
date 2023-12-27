import Link from "next/link";
import React from "react";

const Sidebar = ({ sections, industry }) => (
  <div className="sticky top-0 w-1/4 md:flex flex-col text-left pb-3 h-[calc(100vh-50px)] overflow-y-auto hidden">
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2 sticky top-0 bg-black pb-4">
        On This Page
      </h2>
      <ul className="overflow-y-auto">
        {sections.map((section, index) => (
          <li key={index} className="mb-4">
            <p className="text-lg font-medium">
              <a href={"#" + section.title}>{section.title}</a>
            </p>
            {section.content && Array.isArray(section.content) && (
              <ul className="ml-4">
                {section.content.map((subSection, idx) => (
                  <li key={idx} className="text-sm mt-2">
                    {subSection.slug && subSection.heading && (
                      <Link href={industry + "/" + subSection.slug}>
                        {subSection.heading}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sidebar;
