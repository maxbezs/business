import React from "react";
import H3 from "./H3";
import Image from "next/image";
import Paragraph from "./Paragraph";

const Card = ({ icon, heading, desc }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        alt={heading}
        src={icon}
        width="64"
        height="64"
        className="w-20 h-20 mb-4"
      />
      <H3>{heading}</H3>
      <Paragraph className={"max-w-80"}>{desc}</Paragraph>
    </div>
  );
};

export default Card;
