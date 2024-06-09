import TickMark from "../components/TickMark";
const PlanSection = ({
  planType,
  description,
  price,
  features,
  buttonText,
  buttonLink,
  buttonSubText,
  isPopular,
}) => (
  <section
    className={`h-fit flex flex-col bg-neutral-950 p-6 justify-between border-neutral-800 w-full rounded-md border drop-shadow-[0_0px_1px_rgba(256,256,256,0.78)] ${
      isPopular
        ? "drop-shadow-[0_0px_6px_rgba(256,256,256,0.78)] hover:drop-shadow-[0_0px_6px_rgba(256,256,256,0.99)] "
        : "overflow-hidden"
    }`}
  >
    {isPopular && (
      <div className="bg-neutral-600 absolute m-auto left-0 right-0 z-10 w-fit top-0 mt-[-24px] p-3 rounded-full">
        <p className="text-xs">Most Popular</p>
      </div>
    )}
    <h3 className="flex items-center text-gray-200 text-sm font-semibold">
      <span>{planType}</span>
    </h3>
    <p className="relative flex tracking-tight text-gray-200 mt-5 text-3xl">
      <span aria-hidden="true" className="space-x-1 transition">
        <span>{price}</span>
        <span className="text-sm tracking-normal text-gray-300 dark:text-gray-500">
          /month
        </span>
      </span>
    </p>
    <p className="mt-4 text-sm text-gray-200 dark:text-gray-400">
      {description}
    </p>
    <div className="order-last mt-6">
      <ul
        role="list"
        className="-my-2 divide-y text-sm divide-gray-200/60 text-gray-200 dark:divide-white/10 dark:text-gray-300"
      >
        {features.map((feature, index) => (
          <li key={index} className="flex py-2.5">
            <TickMark />
            <span className={index === 1 ? "ml-2 underline" : "ml-2 "}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <a
      className={`inline-flex justify-center rounded-lg py-2 px-3 text-sm font-medium outline-2 outline-offset-2 transition-colors mt-6 ${
        isPopular
          ? "relative overflow-hidden bg-white text-black before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-green-600 active:text-white/80 before:transition-colors"
          : "border border-transparent bg-neutral-800 dark:bg-transparent text-white hover:bg-background-dark dark:border dark:border-white/10 dark:hover:border-white/20"
      }`}
      href={buttonLink}
    >
      {buttonText}{" "}
      {buttonSubText && <span className="ml-1 underline">{buttonSubText}</span>}
    </a>
  </section>
);
export default PlanSection;
