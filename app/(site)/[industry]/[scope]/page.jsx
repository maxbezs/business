import Breadcrumbs from "@/app/(site)/components/Breadcrumbs";
import H1 from "@/app/(site)/components/H1";
import Section from "@/app/(site)/components/Section";
import Sidebar from "@/app/(site)/components/Sidebar";
import { getPage } from "@/sanity/sanity-utils";
import React from "react";

export default async function Scope({ params }) {
  const scope = await getPage(params.industry + "/" + params.scope);
  const sortedSections = scope.content.sort((a, b) => {
    if (a.content && !b.content) {
      return -1; // a comes before b if a.content exists and b.content does not
    } else if (!a.content && b.content) {
      return 1; // b comes before a if b.content exists and a.content does not
    }
    return 0; // No change in order if both have content or both don't have content
  });
  return (
    <div className="w-10/12 mx-auto pt-16">
      <H1>{scope.title}</H1>
      <Breadcrumbs />
      <div className="flex gap-6 pt-4">
        <div className="w-3/4">
          {sortedSections.map((categoryData, index) => (
            <Section
              key={index}
              title={categoryData.title}
              items={categoryData.content}
              industry={params.scope}
            />
          ))}
        </div>
        <Sidebar sections={scope.content} industry={params.scope} />
      </div>
    </div>
  );
}
