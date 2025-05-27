"use server";

import FilterTitle from "./FilterTitle";
import FilterSelects from "./FilterSelects";
import ImageAndPrice from "./ImageAndPrice";
import Especifications from "./Especifications";
import Coments from "./Coments";

export default async function FilterSection() {
  return (
    <div className="mx-auto max-w-5xl pb-20">
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
