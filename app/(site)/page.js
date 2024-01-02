"use client";
import { getScopes } from "@/sanity/sanity-utils";
import H1 from "./components/H1";
import SearchBar from "./components/SearchBar";

export default async function QWERTY() {
  const categories = await getScopes();
  return (
    <div className="container mx-auto p-4">
      <H1 styles="text-center max-w-4xl mx-auto leading-tight		 ">
        Step-by-step guide to maximize Your business
      </H1>

      <SearchBar categories={categories} />
    </div>
  );
}
