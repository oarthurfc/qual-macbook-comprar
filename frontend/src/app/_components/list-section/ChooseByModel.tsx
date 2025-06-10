"use client";

import { MacBook } from "@/types/types";
import { HeaderWithToggle } from "./HeaderWithToggle";
import MacBookCard from "./MacBookCard";
import { useState } from "react";

export default function ChooseByModel({ macBooks }: { macBooks: { data: MacBook[] } }) {
  const [filterModel, setFilterModel] = useState("MacBook Air");

  const filteredMacBooks = macBooks.data.filter((macbook) =>
    macbook.model.toLowerCase().includes(filterModel.toLowerCase())
  );

  return (
    <>
      <div className="bg-background py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-14">
          <HeaderWithToggle filterModel={filterModel} setFilterModel={setFilterModel} />

          <MacBookCard macBooks={{ data: filteredMacBooks }} />
        </div>
      </div>
    </>
  );
}
