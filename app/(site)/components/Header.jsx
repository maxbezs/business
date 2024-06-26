"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [visible, setVisible] = useState(true);
  const location = usePathname();

  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    const handleUrlChange = () => {
      setActivePath(location);
    };

    handleUrlChange();
  }, [activePath]);
  useEffect(() => {
    // Define a threshold width for non-mobile devices
    const thresholdWidth = 768;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    let prevScrollPos = window.pageYOffset;

    // Check if the device is not mobile based on screen width
    if (window.innerWidth > thresholdWidth) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-neutral-950 border-b-[1px] border-neutral-800 fixed top-0 left-0 w-full transition-transform duration-300 filter z-50 px-6 transform ${
        visible ? "translate-y-0 " : "-translate-y-full "
      } `}
    >
      <div className="container max-w-6xl mx-auto flex justify-between items-center  h-[60px]">
        <Link href="/" className="h-full">
          <Image
            alt="max_bezs logo"
            src="/business-logo-small.png"
            width="64"
            height="64"
            priority={true}
          />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex space-x-4 ${
            isSidebarOpen
              ? " fixed top-0 right-0 w-full h-[calc(100vh+69px)] text-white transition-transform transform translate-x-0 bg-neutral-950"
              : "hidden "
          }`}
        >
          <ul
            className={` ${
              isSidebarOpen
                ? "w-full h-full flex flex-col mt-24 gap-8"
                : "md:flex md:space-x-12"
            }`}
          >
            <li className="w-fit mx-auto">
              <Link
                href="/blog"
                className={
                  activePath === "/blog"
                    ? " text-white font-cfont underline decoration-2"
                    : "text-white font-cfont "
                }
                onClick={isSidebarOpen ? toggleSidebar : null}
              >
                Blog
              </Link>
            </li>
            <li className="w-fit mx-auto">
              <Link
                href="/contact-us"
                className={
                  activePath === "/services"
                    ? " text-white font-cfont underline decoration-2"
                    : "text-white font-cfont "
                }
                onClick={isSidebarOpen ? toggleSidebar : null}
              >
                Contact
              </Link>
            </li>
            <li
              className="w-fit mx-auto block md:hidden "
              onClick={isSidebarOpen ? toggleSidebar : null}
            >
              <Button href="/pricing">Get Solution</Button>
            </li>
          </ul>

          {isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-white md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
        </nav>
        <Button className="hidden md:block " href="/pricing">
          Get Solution
        </Button>
      </div>
    </header>
  );
};

export default Header;
