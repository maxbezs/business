import Image from "next/image";
import H3 from "./H3";
import Paragraph from "./Paragraph";

const StepComponent = ({ title, description, icon, circle, index }) => (
  <div className="flex items-start mt-8 lg:mt-0">
    <div className="flex items-center lg:gap-6 max-w-4xl">
      <div className="grid grid-rows-5 justify-items-center h-full ">
        <div
          className={`w-1 h-full row-span-2 ${
            index === 1 ? "bg-transparent" : " bg-transparent lg:bg-gray-300"
          }`}
        />
        <p className="text-xl font-bold row-span-1 py-2 text-center w-4">
          {index}
        </p>
        <div
          className={`w-1 h-full row-span-2 bg-transparent${
            index === 6 ? "bg-transparent" : "bg-transparent lg:bg-gray-300"
          }`}
        />
      </div>
      <Image
        className=" w-12 h-12 hidden lg:block"
        src={icon}
        width={"90"}
        height={"90"}
        alt={index + " " + title}
      />
      <div className="ms-4">
        <H3>{title}</H3>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  </div>
);

export default StepComponent;
