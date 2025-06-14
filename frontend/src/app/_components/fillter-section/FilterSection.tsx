"use server";

import FilterTitle from "./FilterTitle";
import FilterSelects from "./FilterSelects";
import ImageAndPrice from "./ImageAndPrice";
import Especifications from "./Especifications";
import Coments from "./Coments";
import { MacBook } from "@/types/types";
import { MacbookFilterProvider } from "@/contexts/MacBookFilterContext";

export default async function FilterSection({ macBooks }: { macBooks: { data: MacBook[] } }) {
  return (
    <MacbookFilterProvider macbooks={macBooks}>
      <div id="filter-section" className="mx-auto max-w-5xl scroll-mt-16 pb-16">
        <FilterTitle />
        <div className="mt-11 flex flex-col gap-20">
          <FilterSelects />
          <ImageAndPrice />
          <div className="flex items-center justify-between">
            <Especifications />

            <Coments />
          </div>
        </div>
      </div>
    </MacbookFilterProvider>
  );
}
