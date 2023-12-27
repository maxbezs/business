import Link from "next/link";
import React from "react";

const SidebarGuide = ({ tabs }) => {
  // Function to render h3 sections under a specific h2 section
  const renderSubSections = (h2Index) => {
    const nextH2Index = tabs.findIndex(
      (tab, index) => index > h2Index && tab.style === "h2"
    );

    return tabs
      .slice(h2Index + 1, nextH2Index === -1 ? undefined : nextH2Index)
      .filter((tab) => tab.style === "h3")
      .map((subsection) => (
        <li key={subsection._key} className="text-sm mt-2 ml-4">
          <a
            href={"#" + generateReadableId(subsection.children[0].text)}
            className="text-lg font-medium"
          >
            {subsection.children[0].text}
          </a>
        </li>
      ));
  };

  const generateReadableId = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  return (
    <div className="sticky top-0 w-1/4 md:flex flex-col text-left pb-3 h-[calc(100vh-50px)] overflow-y-auto hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 sticky top-0 bg-black pb-4">
          On This Page
        </h2>
        <ul className="overflow-y-auto">
          {tabs.map(
            (section, index) =>
              section.style === "h2" && (
                <li key={section._key} className="text-sm mt-2">
                  <a
                    href={"#" + generateReadableId(section.children[0].text)}
                    className="text-lg font-medium"
                  >
                    {section.children[0].text}
                  </a>

                  <ul>{renderSubSections(index)}</ul>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default SidebarGuide;
