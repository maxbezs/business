import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-neutral-950 border-t-[1px] border-neutral-800	">
      <div className="sm:flex space-y-8 sm:space-y-0 max-w-6xl mx-auto">
        <div className="flex-1 grid grid-cols-2 gap-8 sm:flex sm:flex-col">
          <a href="/">
            <Image
              alt="max_bezs logo"
              src="/business-logo-small.png"
              width="64"
              height="64"
            />
          </a>
          <div className="flex flex-1 space-x-4 sm:items-end items-center">
            <a target="_blank" href="/">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-gray-500 hover:fill-gray-700 dark:hover:fill-gray-300"
              >
                <path d="M9.52373 6.77566L15.4811 0H14.0699L8.89493 5.88201L4.7648 0H0L6.24693 8.89549L0 15.9999H1.4112L6.87253 9.78701L11.2352 15.9999H16M1.92053 1.04126H4.08853L14.0688 15.0098H11.9003"></path>
              </svg>
            </a>
            <div className="w-px h-4 bg-gray-100 dark:bg-white/10"></div>
            <a target="_blank" href="/">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[18px] w-[18px] fill-gray-500 hover:fill-gray-700 dark:hover:fill-gray-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.18063 0C4.11532 0 0.0205078 4.125 0.0205078 9.22819C0.0205078 13.3074 2.64419 16.7604 6.28394 17.9826C6.739 18.0744 6.90569 17.784 6.90569 17.5397C6.90569 17.3258 6.89069 16.5924 6.89069 15.8284C4.34257 16.3785 3.81194 14.7283 3.81194 14.7283C3.40244 13.6588 2.79569 13.3839 2.79569 13.3839C1.96169 12.8186 2.85644 12.8186 2.85644 12.8186C3.78157 12.8797 4.26701 13.7659 4.26701 13.7659C5.08582 15.1714 6.40525 14.7742 6.93607 14.5297C7.01182 13.9339 7.25463 13.5214 7.51244 13.2922C5.48013 13.0783 3.34188 12.2839 3.34188 8.73919C3.34188 7.73081 3.70563 6.90581 4.28201 6.26419C4.19107 6.03506 3.87251 5.08763 4.37313 3.81956C4.37313 3.81956 5.14657 3.57506 6.8905 4.76681C7.63715 4.56481 8.40714 4.46205 9.18063 4.46119C9.95407 4.46119 10.7425 4.56825 11.4706 4.76681C13.2147 3.57506 13.9881 3.81956 13.9881 3.81956C14.4888 5.08763 14.17 6.03506 14.0791 6.26419C14.6706 6.90581 15.0194 7.73081 15.0194 8.73919C15.0194 12.2839 12.8811 13.0629 10.8336 13.2922C11.1674 13.5825 11.4554 14.1324 11.4554 15.0034C11.4554 16.2409 11.4404 17.2341 11.4404 17.5395C11.4404 17.784 11.6073 18.0744 12.0621 17.9827C15.7019 16.7603 18.3256 13.3074 18.3256 9.22819C18.3406 4.125 14.2308 0 9.18063 0Z"
                ></path>
              </svg>
            </a>
            <div className="w-px h-4 bg-gray-100 dark:bg-white/10"></div>
            <a target="_blank" href="/">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-gray-500 hover:fill-gray-700 dark:hover:fill-gray-300"
              >
                <path d="M3.37264 10.1144C3.37264 11.0444 2.62165 11.796 1.69246 11.796C0.763267 11.796 0.0122784 11.0444 0.0122784 10.1144C0.0122784 9.18439 0.763267 8.43276 1.69246 8.43276H3.37264V10.1144ZM4.21273 10.1144C4.21273 9.18439 4.96372 8.43276 5.89291 8.43276C6.8221 8.43276 7.57308 9.18439 7.57308 10.1144V14.3184C7.57308 15.2484 6.8221 16 5.89291 16C4.96372 16 4.21273 15.2484 4.21273 14.3184V10.1144Z"></path>
                <path d="M5.89336 3.36322C4.96417 3.36322 4.21318 2.61159 4.21318 1.68161C4.21318 0.751628 4.96417 0 5.89336 0C6.82255 0 7.57353 0.751628 7.57353 1.68161V3.36322H5.89336ZM5.89336 4.21676C6.82255 4.21676 7.57353 4.96839 7.57353 5.89837C7.57353 6.82835 6.82255 7.57998 5.89336 7.57998H1.68018C0.750989 7.57998 0 6.82835 0 5.89837C0 4.96839 0.750989 4.21676 1.68018 4.21676H5.89336Z"></path>
                <path d="M12.6269 5.89837C12.6269 4.96839 13.3779 4.21676 14.3071 4.21676C15.2363 4.21676 15.9873 4.96839 15.9873 5.89837C15.9873 6.82835 15.2363 7.57998 14.3071 7.57998H12.6269V5.89837ZM11.7868 5.89837C11.7868 6.82835 11.0358 7.57998 10.1066 7.57998C9.17745 7.57998 8.42646 6.82835 8.42646 5.89837V1.68161C8.42646 0.751628 9.17745 0 10.1066 0C11.0358 0 11.7868 0.751628 11.7868 1.68161V5.89837Z"></path>
                <path d="M10.1066 12.6368C11.0358 12.6368 11.7868 13.3884 11.7868 14.3184C11.7868 15.2484 11.0358 16 10.1066 16C9.17745 16 8.42646 15.2484 8.42646 14.3184V12.6368H10.1066ZM10.1066 11.796C9.17745 11.796 8.42646 11.0444 8.42646 10.1144C8.42646 9.18439 9.17745 8.43276 10.1066 8.43276H14.3198C15.249 8.43276 16 9.18439 16 10.1144C16 11.0444 15.249 11.796 14.3198 11.796H10.1066Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 dark:text-gray-300 text-sm">
              Product
            </label>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/contact-us"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/pricing"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
          <div>
            <label className="text-gray-800 dark:text-gray-300 text-sm">
              Company
            </label>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
