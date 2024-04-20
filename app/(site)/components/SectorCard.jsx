import React from "react";
import Button from "./Button";
import Image from "next/image";
import H3 from "./H3";
import Paragraph from "./Paragraph";

const SectorCard = ({ icon, title, subtitle, desc }) => {
  return (
    <div className="bg-neutral-900 p-4 rounded-xl max-w-prose flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <Image
          alt={title}
          src={icon}
          width="64"
          height="64"
          className="w-16 h-16 "
        />
        <H3>{title}</H3>
      </div>
      <h4 className="text-xl font-bold">{subtitle}</h4>
      <Paragraph>{desc}</Paragraph>
      <Button href={"/guide"}> Explore More</Button>
    </div>
  );
};

export default SectorCard;
