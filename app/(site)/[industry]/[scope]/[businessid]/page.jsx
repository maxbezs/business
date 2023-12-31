import Breadcrumbs from "@/app/(site)/components/Breadcrumbs";
import BusinessTabs from "@/app/(site)/components/BusinessTabs";
import H1 from "@/app/(site)/components/H1";
import Paragraph from "@/app/(site)/components/Paragraph";
import { getContent } from "@/sanity/sanity-utils";
import React from "react";

export default async function CategoryPage({ params }) {
  const scope = await getContent(params.businessid);
  return (
    <div className="mx-auto max-w-6xl w-10/12 pt-16">
      <H1 styles="text-center lg:leading-[72px] leading-base ">
        Professional Technology Solutions for {scope?.title} Businesses
      </H1>
      <div className="flex justify-center w-full">
        <Breadcrumbs />
      </div>
      <Paragraph className="text-center">
        Choose how big your {scope?.title} business is:
      </Paragraph>
      <BusinessTabs content={scope.content} title={scope.title} />
    </div>
  );
}
