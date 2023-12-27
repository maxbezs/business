"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const capitalizeAndRemoveDashes = (string) => {
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Breadcrumbs = () => {
  const paths = usePathname();
  const pathSegments = paths.split("/").filter((path) => path);

  return (
    <div className="flex h-fit w-fit my-4">
      <nav data-slot="base" aria-label="Breadcrumbs">
        <ol data-slot="list" className="flex flex-wrap list-none rounded-small">
          {pathSegments.map((segment, index) => {
            let path;
            if (index === 0) {
              path = "/";
            } else {
              path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            }

            const isLastSegment = index === pathSegments.length - 1;
            const segmentDisplay =
              segment === "/" ? "Home" : capitalizeAndRemoveDashes(segment);

            return (
              <li data-slot="base" className="flex items-center" key={index}>
                <span
                  data-slot="item"
                  className="flex gap-1 items-center cursor-pointer whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-foreground/50 text-small hover:opacity-80 active:opacity-disabled transition-opacity no-underline"
                  tabIndex="0"
                  role="link"
                >
                  <Link href={path}>{segmentDisplay}</Link>
                </span>
                {!isLastSegment && (
                  <span
                    data-slot="separator"
                    aria-hidden="true"
                    className="px-1 text-foreground/50"
                  >
                    <svg
                      aria-hidden="true"
                      fill="none"
                      focusable="false"
                      height="1em"
                      role="presentation"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="1em"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
