import Image from "next/image";
import Button from "./components/Button";
import Card from "./components/Card";
import H1 from "./components/H1";
import H2 from "./components/H2";
import Paragraph from "./components/Paragraph";
import SectorCard from "./components/SectorCard";
import StepComponent from "./components/StepComponent";
import CardLatest from "./components/CardLatest";
import { cardsData, sectorsData, steps, latest } from "./landing-data";
import H3 from "./components/H3";
export const revalidate = 0;
export const metadata = {
  title: "max_bezs: Your Partner in Digital Excellence and Business Growth",
  description:
    "Max_bezs: Elevating businesses in the digital age with advanced web/app development, enhanced digital presence, and streamlined operations for growth.",
};

export default async function Home() {
  return (
    <div className=" mx-auto max-w-7xl">
      <div className="relative max-h-screen h-[400px] sm:h-[700px]">
        <Image
          alt="maximize"
          src={"/background.png"}
          quality={100}
          className="-z-10 block absolute bottom-0  "
          width={1600}
          height={800}
        />
        <div className="w-full px-4 pt-20 lg:p-20 flex flex-col gap-4 text-center ">
          <div>
            <Paragraph>Boost Your Business with Tailored Solutions🚀</Paragraph>
            <H1 className="w-full max-w-4xl mx-auto">
              Achieve Unprecedented Success in Hospitality, Retail, and Service
            </H1>
          </div>

          <div className="flex gap-4 mx-auto">
            <Button href={"/pricing"}>Get Solution</Button>
            <Button variant="outline" href={"/contact-us"}>
              Schedule meeting
            </Button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center px-4 pt-20 lg:px-0">
        <H2>Plan benefits</H2>
        <Paragraph className={"text-center max-w-xl"}>
          Say goodbye to tech headaches. Simply submit request and focus on what
          truly matters for you
        </Paragraph>
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 py-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              heading={card.heading}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
      <div className="px-4 lg:py-8">
        <H2>Let's start here: </H2>
        <Paragraph className={"max-w-2xl"}>
          The subscription-based model with a results-oriented approach ensures
          to meet the evolving needs of your business so your <br />
          <span className="font-bold">
            business achieve your desired outcomes
          </span>
        </Paragraph>
        {steps.map((step, index) => (
          <StepComponent
            title={step.title}
            description={step.description}
            icon={step.icon}
            index={index + 1}
            key={index}
          />
        ))}
      </div>
      <div className="px-4 lg:py-8 ">
        <H2 className="text-center max-w-4xl mx-auto">
          Enhance Your Business with Specialized <br />
          <span className="italic">Step-by-step Guidance</span>
        </H2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  mx-auto my-8">
          {sectorsData.map((sector, index) => (
            <SectorCard
              icon={sector.icon}
              title={sector.title}
              subtitle={sector.subtitle}
              desc={sector.description}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="px-4 lg:px-0 py-8">
        <div className="mx-auto max-w-lg text-center">
          <H2>Latest solutions</H2>
          <Paragraph>
            The proofs that you will made the right decision by choosing our
            plan
          </Paragraph>
        </div>

        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-8 px-4 xl:px-0">
          {latest.map((solution, index) => (
            <CardLatest key={index} {...solution} />
          ))}
          <div className="group flex flex-col items-center">
            <div className=" w-full overflow-hidden">
              <Image
                alt={"heading"}
                src="/idea.svg"
                width="64"
                height="64"
                className="w-full h-20 sm:h-[13rem] group-hover:scale-105 transition"
              />
            </div>
            <H3 className="mt-5">Something else?</H3>

            <h2 className="mt-3 text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed text-center mb-4">
              Discover limitless possibilities. Take your business to new
              heights with a subscription or by scheduling a meeting{" "}
            </h2>
            <Button href={"/pricing"}> Get Solution</Button>
          </div>
        </div>
      </div>

      <div className="text-center py-8 px-4 lg:p-20">
        <H2>Ready to take your business to the next level?</H2>
        <div className="flex gap-4 mx-auto w-fit">
          <Button href={"/pricing"}>Get Solution</Button>
          <Button variant={"outline"} href={"/contact-us"}>
            Schedule meeting
          </Button>
        </div>
      </div>
    </div>
  );
}
