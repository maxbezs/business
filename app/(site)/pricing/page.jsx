import MyAccordionComponent from "../components/MyAccordionComponent";
import H2 from "../components/H2";
import TickMark from "../components/TickMark";

import ServicesTabs from "../components/ServicesTabs";
import PlanSection from "../components/PlanSection";
import { getFaq } from "@/sanity/sanity-utils";
export const revalidate = 0;
export const metadata = {
  title: "Maximize Your Business Potential with Our Tailored Pricing Plans",
  description:
    "Discover the perfect pricing plan for your business needs. From solopreneurs to large enterprises, our plans are designed to help you scale efficiently and maximize your business potential. Start your journey towards business success today!",
  keywords: [
    "Business Growth Plans",
    "Affordable Pricing Models",
    "Customizable Business Solutions",
    "Scalability Pricing Options",
    "Maximize Business Efficiency",
    "Enterprise Subscription Plans",
    "Solopreneur-Friendly Pricing",
    "Business Plan Optimization",
    "Value-Driven Pricing Strategies",
    "Efficient Business Scale-Up Plans",
  ],
  author: "max_bezs",
  creator: "max_bezs",
  publisher: "max_bezs",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  icons: {
    other: [
      {
        rel: "image_src",
        url: "https://business.max-bezs.com/listmax.jpg",
      },
    ],
  },
  openGraph: {
    title: "Maximize Your Business Potential with Our Tailored Pricing Plans",
    description:
      "Discover the perfect pricing plan for your business needs. From solopreneurs to large enterprises, our plans are designed to help you scale efficiently and maximize your business potential. Start your journey towards business success today!",
    url: "https://business.max-bezs.com/pricing",
    siteName: "max_bezs Business",

    images: [
      {
        url: "https://business.max-bezs.com/listmax.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://business.max-bezs.com/listmax.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    type: "website",
  },
};

export const plans = [
  {
    planType: "Small Business",
    description: "Built for growth",
    price: "$1399",
    features: [
      "Pause or cancel anytime",
      "One request at a time",
      "Average 48 hour delivery",
      "Unlimited users",
      "Unlimited features",
    ],
    buttonText: "Buy now",
    buttonLink:
      process.env.NODE_ENV === "production"
        ? "https://buy.stripe.com/cN28xg4U86ALacw3cc"
        : "",
    priceId:
      process.env.NODE_ENV === "production"
        ? "price_1PIphdHlVYFFZza2vurkkqgS"
        : "",
  },
  {
    planType: "Middle Business",
    description: "Built for scalability",
    price: "$1999",
    features: [
      "Pause or cancel anytime",
      "Two requests at a time",
      "Average 48 hour delivery",
      "Unlimited users",
      "Unlimited features",
    ],
    buttonText: "Try for free",
    buttonLink:
      process.env.NODE_ENV === "production"
        ? "https://buy.stripe.com/7sIbJs0DS3ozacw5km"
        : "",
    buttonSubText: "2 days",
    isPopular: true,
    priceId:
      process.env.NODE_ENV === "production"
        ? "price_1PIplFHlVYFFZza2oHjgQLh4"
        : "",
  },
  {
    planType: "Large Business",
    description: "Built for limitless",
    price: "$2599",
    features: [
      "Pause or cancel anytime",
      "Two requests at a time",
      "Average 48 hour delivery",
      "Unlimited users",
      "Unlimited features",
    ],
    buttonText: "Try for free",
    buttonLink:
      process.env.NODE_ENV === "production"
        ? "https://buy.stripe.com/4gweVE0DSf7hfwQ6op"
        : "",
    buttonSubText: "4 days",
    priceId:
      process.env.NODE_ENV === "production"
        ? "price_1PIpmHHlVYFFZza28JVdWxNY"
        : "",
  },
];
export default async function Pricing() {
  const faq = await getFaq();

  return (
    <div className="my-8 ">
      <div className="text-center mx-6 ">
        <div className="mx-auto max-w-[22rem] md:max-w-[41rem] font-cfont text-3xl md:text-5xl leading-tight space-y-2 text-gray-800 dark:text-gray-200">
          <h1>Choose a plan to MAX📈 Your Business </h1>
        </div>
        <p className="mt-4 mx-auto max-w-[30rem] text-gray-200 dark:text-gray-400 md:leading-loose">
          By choosing any plan You make first step to make Your Dream Business -
          Real
        </p>
      </div>
      <div className="mt-12 grid max-w-7xl mx-auto grid-cols-1 gap-12 lg:gap-3 lg:grid-cols-5 px-8">
        <section className="h-fit flex flex-col overflow-hidden rounded-md p-6 border border-white/[0.15]">
          <h3 className="flex items-centertext-gray-200 text-sm font-semibold">
            <span>Pay as you go</span>
          </h3>
          <p className="relative flex tracking-tight text-gray-200 mt-5 text-3xl">
            <span className="space-x-1">
              $70
              <span className="text-sm tracking-normal text-gray-400">
                /day
              </span>
            </span>
          </p>
          <p className="mt-4 text-sm text-gray-200 dark:text-gray-400">
            Built for individuals
          </p>
          <a
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-medium outline-2 outline-offset-2 transition-colors border border-transparent bg-neutral-800 dark:bg-transparent text-white hover:bg-background-dark dark:border dark:border-white/10 dark:hover:border-white/20 mt-6"
            href="https://buy.stripe.com/eVa8xg86k9MX1G06ou"
          >
            Start Now
          </a>
          <div className="order-last mt-6">
            <ul
              role="list"
              className="-my-2 divide-y text-sm divide-gray-200/60 text-gray-200 dark:divide-white/10 dark:text-gray-300"
            >
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Day-to-day payment</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2 underline">One request at a time</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2 ">Average 36 hour delivery</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2 ">Limited users</span>
              </li>{" "}
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2 ">Limited features</span>
              </li>
            </ul>
          </div>
        </section>
        {plans.map((plan, index) => (
          <PlanSection key={index} {...plan} />
        ))}
        <section className="h-fit flex flex-col overflow-hidden rounded-md p-6 border border-gray-200/70 dark:border-white/[0.15]">
          <h3 className="flex items-center text-gray-200 text-sm font-semibold">
            <span>Enterprise</span>
          </h3>
          <p className="relative flex tracking-tight text-gray-200 mt-5 text-3xl">
            Custom
          </p>
          <p className="mt-4 text-sm text-gray-200 dark:text-gray-400">
            Fully tailored for your business
          </p>
          <a
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-medium outline-2 outline-offset-2 transition-colors border border-transparent bg-neutral-800 dark:bg-transparent text-white hover:bg-background-dark dark:border dark:border-white/10 dark:hover:border-white/20 mt-6"
            href="/contact-us"
          >
            Contact us
          </a>
          <div className="order-last mt-6">
            <ul
              role="list"
              className="-my-2 divide-y text-sm divide-gray-200/60 text-gray-200 dark:divide-white/10 dark:text-gray-300"
            >
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">B2B contract</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">{"> $5000/month"}</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">
                  The best devs only for your business
                </span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Unlimited</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="max-w-5xl mx-auto my-8 px-8 lg:px-0">
        <H2 className="text-center ">
          So easy to use, simple as it is. How does it work?
        </H2>
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="flex gap-2 items-center border-neutral-800 border  drop-shadow-[0_0px_1px_rgba(256,256,256,0.35)]  rounded-md p-4">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              className="w-auto h-12"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <p className="w-full lg:w-3/4">
              Subscribe to a plan & request as many tasks as you'd like.
            </p>
          </div>
          <div className="flex gap-2 items-center border-neutral-800 border  drop-shadow-[0_0px_1px_rgba(256,256,256,0.35)]  rounded-md p-4">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
              className="w-auto h-12"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <p className="w-full lg:w-3/4">
              Receive ready to use soft/feature within a few days. No Weekends
            </p>
          </div>
          <div className="flex gap-2 items-center border-neutral-800 border  drop-shadow-[0_0px_1px_rgba(256,256,256,0.35)]  rounded-md p-4">
            <svg
              className="w-auto h-12"
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M23 4v6h-6" />
              <path d="M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
            <p className="w-full lg:w-3/4">
              We'll revise the results until you're 100% satisfied.
            </p>
          </div>
        </div>
      </div>
      <ServicesTabs />
      <div className=" max-w-xl mx-auto px-8 my-8">
        <H2 className="mx-auto w-fit">FAQs</H2>
        <div id="faq">
          {faq.map((block) => (
            <MyAccordionComponent
              key={block.id}
              question={block.question}
              answer={block.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
