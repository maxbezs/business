import React from "react";
import TickMark from "../components/TickMark";
import MyAccordionComponent from "../components/MyAccordionComponent";
import H2 from "../components/H2";

const Pracing = () => {
  return (
    <div className="my-8 ">
      <div className="text-center mx-6 ">
        <div className="mx-auto max-w-[22rem] md:max-w-[41rem] font-cfont text-3xl md:text-5xl leading-tight space-y-2 text-gray-800 dark:text-gray-200">
          <h1>Choose a plan to MAX📈 Your Business </h1>
        </div>
        <p className="mt-4 mx-auto max-w-[30rem] text-gray-600 dark:text-gray-400 md:leading-loose">
          By choosing any plan You make first step to make Your Dream Business -
          Real
        </p>
      </div>
      <div className="mt-12 grid max-w-7xl mx-auto grid-cols-1 gap-12 lg:gap-3 lg:grid-cols-5 px-8">
        <section className="h-fit flex flex-col overflow-hidden rounded-md p-6 border border-white/[0.15]">
          <h3 className="flex items-center text-gray-900 dark:text-gray-100 text-sm font-semibold">
            <span>Free</span>
          </h3>
          <p className="relative flex tracking-tight text-gray-100 mt-5 text-3xl">
            <span className="space-x-1">
              $0
              <span className="text-sm tracking-normal text-gray-400">
                /month
              </span>
            </span>
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            The only guide for solopreneur
          </p>
          <a
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-medium outline-2 outline-offset-2 transition-colors border border-transparent bg-neutral-800 dark:bg-transparent text-white hover:bg-background-dark dark:border dark:border-white/10 dark:hover:border-white/20 mt-6"
            href="/start"
          >
            Get guide for free
          </a>
          {/*<div className="order-last mt-6">
            <ul
              role="list"
              className="-my-2 divide-y text-sm divide-gray-200/60 text-gray-700 dark:divide-white/10 dark:text-gray-300"
            >
              <li className="flex py-2.5">
                <TickMark />

                <span className="ml-2">Custom domain</span>
              </li>
            </ul>
          </div>*/}
        </section>
        <section className="h-fit flex flex-col overflow-hidden bg-neutral-950 p-6 justify-between border-neutral-800 w-full rounded-md border  drop-shadow-[0_0px_1px_rgba(256,256,256,0.78)] ">
          <h3 className="flex items-center text-gray-900 dark:text-gray-100 text-sm font-semibold">
            <span>Small Business</span>
          </h3>
          <p className="relative flex tracking-tight text-gray-900 dark:text-gray-100 mt-5 text-3xl">
            <span aria-hidden="true" className="space-x-1 transition">
              <span>$1399</span>
              <span className="text-sm tracking-normal text-gray-300 dark:text-gray-500">
                /month
              </span>
            </span>
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Built for growth
          </p>
          <a
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-medium outline-2 outline-offset-2 transition-colors border border-transparent bg-neutral-800 dark:bg-transparent text-white hover:bg-background-dark dark:border dark:border-white/10 dark:hover:border-white/20 mt-6"
            href="/start"
          >
            Buy now
          </a>
          <div className="mt-6">
            <ul className="-my-2 divide-y text-sm divide-gray-200/60 text-gray-700 dark:divide-white/10 dark:text-gray-300">
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Pause or cancel anytime</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">One request at a time</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Average 48 hour delivery</span>
              </li>

              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Unlimited users</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Unlimited features</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="h-fit flex flex-col bg-neutral-950 p-6 justify-between border-neutral-800 w-full rounded-md border drop-shadow-[0_0px_6px_rgba(256,256,256,0.78)] hover:drop-shadow-[0_0px_6px_rgba(256,256,256,0.99)]">
          <div className=" bg-neutral-600 absolute m-auto left-0 right-0 z-10 w-fit top-0 mt-[-24px] p-3 rounded-full">
            <p className="text-xs		">Most Popular</p>
          </div>
          <h3 className="flex items-center text-gray-900 dark:text-gray-100 text-sm font-semibold">
            <span>Middle Business</span>
          </h3>
          <p className="relative flex tracking-tight text-gray-900 dark:text-gray-100 mt-5 text-3xl">
            <span aria-hidden="true" className="space-x-1 transition">
              <span>$1999</span>
              <span className="text-sm tracking-normal text-gray-300 dark:text-gray-500">
                /month
              </span>
            </span>
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Built for scalability
          </p>

          <div className="order-last mt-6">
            <ul
              role="list"
              className="-my-2 divide-y text-sm divide-gray-200/60 text-gray-700 dark:divide-white/10 dark:text-gray-300"
            >
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Pause or cancel anytime</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2 underline">Two request at a time</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Average 48 hour delivery</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Unlimited users</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Unlimited features</span>
              </li>
            </ul>
          </div>
          <a
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-medium outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-white text-black before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-green-600 active:text-white/80 before:transition-colors mt-6"
            href="/start"
          >
            Try for free <span className="ml-1 underline">2 days</span>
          </a>
        </section>
        <section className="h-fit flex flex-col overflow-hidden bg-neutral-950 p-6 justify-between border-neutral-800 w-full rounded-md border  drop-shadow-[0_0px_1px_rgba(256,256,256,0.78)] ">
          <h3 className="flex items-center text-gray-900 dark:text-gray-100 text-sm font-semibold">
            <span>Large business</span>
          </h3>
          <p className="relative flex tracking-tight text-gray-900 dark:text-gray-100 mt-5 text-3xl">
            <span aria-hidden="true" className="space-x-1 transition">
              <span>$2599</span>
              <span className="text-sm tracking-normal text-gray-600 dark:text-gray-400">
                /month
              </span>
            </span>
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Built for limitless
          </p>
          <div className="order-last mt-6">
            <ul
              role="list"
              className="-my-2 divide-y text-sm divide-gray-200/60 text-gray-700 dark:divide-white/10 dark:text-gray-300"
            >
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Pause or cancel anytime</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2 underline">Two request at a time</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Average 48 hour delivery</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Unlimited users</span>
              </li>
              <li className="flex py-2.5">
                <TickMark />
                <span className="ml-2">Unlimited features</span>
              </li>
            </ul>
          </div>
          <a
            className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-medium outline-2 outline-offset-2 transition-colors border border-transparent bg-neutral-800 dark:bg-transparent text-white hover:bg-background-dark dark:border dark:border-white/10 dark:hover:border-white/20 mt-6"
            href="#"
          >
            Try for free <span className="ml-1 underline">4 days</span>
          </a>
        </section>
        <section className="h-fit flex flex-col overflow-hidden rounded-md p-6 border border-gray-200/70 dark:border-white/[0.15]">
          <h3 className="flex items-center text-gray-900 dark:text-gray-100 text-sm font-semibold">
            <span>Enterprise</span>
          </h3>
          <p className="relative flex tracking-tight text-gray-900 dark:text-gray-100 mt-5 text-3xl">
            Custom
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
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
              className="-my-2 divide-y text-sm divide-gray-200/60 text-gray-700 dark:divide-white/10 dark:text-gray-300"
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
                <span className="ml-2">Unlimited servers</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className=" max-w-xl mx-auto px-8 my-8">
        <H2 styles="mx-auto w-fit">FAQs</H2>
        <div id="faq">
          <MyAccordionComponent
            question="Why wouldn't I just hire a full-time developer?"
            answer={`Good question! For starters, the annual cost of a full-time middle-level web developer now exceeds $80,000 + benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.s With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your developer when you have work available for them.`}
          />
          <MyAccordionComponent
            question="Is there a limit to how many requests I can have?"
            answer="Once subscribed, you're able to add as many code requests to your queue as you'd like, and they will be delivered one by one."
          />
          <MyAccordionComponent
            question="How fast will I see my web app/webpage online?"
            answer="On average, most requests are completed in just two days or less. However, more complex requests can take longer."
          />
          <MyAccordionComponent
            question="Who are the developers?"
            answer="Experienced devs with live mission to become better everyday, people who ready to push past the limits of code and human capabilities. The mindset of each devs is to provide the best possible result to make the best possible business."
          />
          <MyAccordionComponent
            question="How does the pause feature work?"
            answer="We understand you may not have enough coding work to fill up entire month. Perhaps you only have one or two coding requests at the moment. That's where pausing your subscription comes in handy.

          Billing cycles are based on 30 day period. Let's say you sign up and use the service for 20 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future."
          />
          <MyAccordionComponent
            question="How do I request tasks?"
            answer="We offers a ton of flexibility in how you request designs using Trello. Some common ways clients request task is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game."
          />
          <MyAccordionComponent
            question="What if I don't like the result?"
            answer="No worries! We'll continue to revise the result until you're 100% satisfied."
          />
          <MyAccordionComponent
            question="What if I only have a single request?"
            answer="That's fine. You can pause your subscription when finished and return  when you have additional tasks. There's no need to let the remainder of your subscription go to waste."
          />
          <MyAccordionComponent
            question="Are there any refunds if I don't like the service?"
            answer="Due to the high quality nature of the work, there will be no refunds issued."
          />
          <MyAccordionComponent
            question="Is there any tasks you don't cover?"
            answer="Absolutely. We do not cover the following tasks:"
          />
          <MyAccordionComponent
            question="What programs do you code in?"
            answer="Most requests are coded using React.js."
          />
        </div>
      </div>
    </div>
  );
};

export default Pracing;
