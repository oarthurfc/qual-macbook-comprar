"use server"

import FilterTitle from "./FilterTitle";
import FilterSelects from "./FilterSelects";
import ImageAndPrice from "./ImageAndPrice";
import Especifications from "./Especifications";
import Coments from "./Coments";

export default async function FilterSection() {
  return (
    <>
      <FilterTitle />
      <div className="flex flex-col gap-20 mt-11">
        <FilterSelects />
        <ImageAndPrice />
        <div className="flex items-center justify-between">
          <Especifications />

          <Coments />
        </div>
      </div>
    </>
  );
}
