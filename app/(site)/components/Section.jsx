import React from "react";
import H2 from "@/app/(site)/components/H2";
import CategoryBlock from "@/app/(site)/components/CategoryBlock";

const Section = ({ title, items, industry }) => {
  const getRandomParagraph = (paragraph) => {
    return paragraph[Math.floor(Math.random() * paragraph.length)];
  };
  return (
    <div>
      <H2 id={title}>{title}</H2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {items && items.length > 0 ? (
          items.map((item) => (
            <CategoryBlock
              key={item._id}
              href={industry + "/" + item.slug}
              industry={item.industry}
              heading={item.heading}
              paragraph={getRandomParagraph(item.paragraph)}
              buttonText={item.buttonText}
            />
          ))
        ) : (
          <p>Coming soon</p>
        )}
      </div>
    </div>
  );
};

export default Section;
