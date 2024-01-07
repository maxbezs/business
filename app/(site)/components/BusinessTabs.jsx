"use client";

import React, { useState } from "react";
import SidebarGuide from "@/app/(site)/components/SidebarGuide";
import Paragraph from "./Paragraph";
import H2 from "./H2";
import H3 from "./H3";

// This component is responsible for rendering individual text elements.
const TextElement = ({ child, markDefs }) => {
  const linkDef = markDefs.find((def) => child.marks.includes(def._key));
  return linkDef ? (
    <a href={linkDef.href} className="text-sky-500 underline">
      {child.text}
    </a>
  ) : (
    <>{child.text}</>
  );
};
const generateReadableId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const ContentBlock = ({ block }) => {
  const renderChildren = () =>
    block.children.map((child, index) => (
      <TextElement key={index} child={child} markDefs={block.markDefs} />
    ));

  const blockStyle = block.style;

  if (blockStyle === "h2" || blockStyle === "h3") {
    const Component = blockStyle === "h2" ? H2 : H3;
    const readableId = generateReadableId(block.children[0].text);
    return <Component id={readableId}>{renderChildren()}</Component>;
  }

  return <Paragraph>{renderChildren()}</Paragraph>;
};

const BusinessTabs = ({ content = [], title = "" }) => {
  const [activeTab, setActiveTab] = useState("Middle");
  const tabs = ["Small", "Middle", "Large"];
  const contentMap = content.reduce((acc, item) => {
    acc[item.title] = item.content;
    return acc;
  }, {});

  const trattoriaContent = contentMap[activeTab + " " + title] || [];

  return (
    <div className="pb-8">
      <div className="flex justify-center mb-4">
        <div className="w-fit bg-neutral-900 rounded-xl p-1">
          {tabs.map((tabType, index) => (
            <button
              key={index}
              className={`px-4 py-2 ${
                activeTab === tabType
                  ? "bg-neutral-700 rounded-lg text-white"
                  : "text-neutral-400"
              }`}
              onClick={() => setActiveTab(tabType)}
            >
              {tabType}
            </button>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="w-full lg:w-3/4">
          {tabs.map((tabType, index) => (
            <div
              key={index}
              className={`${activeTab === tabType ? "" : "hidden"}`}
            >
              {contentMap[tabType + " " + title]?.map((block, idx) => (
                <ContentBlock key={idx} block={block} />
              ))}
            </div>
          ))}
        </div>
        <SidebarGuide tabs={trattoriaContent} />
      </div>
    </div>
  );
};

export default BusinessTabs;
