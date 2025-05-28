"use server";

import FilterTitle from "./FilterTitle";
import FilterSelects from "./FilterSelects";
import ImageAndPrice from "./ImageAndPrice";
import Especifications from "./Especifications";
import Coments from "./Coments";

export default async function FilterSection() {
  return (
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
  );
}
