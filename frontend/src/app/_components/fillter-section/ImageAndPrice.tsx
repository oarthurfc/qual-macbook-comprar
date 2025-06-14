"use client";

import Image from "next/image";
import Price from "./Price";
import { useMacbookFilter } from "@/contexts/MacBookFilterContext";

export default function ImageAndPrice() {
  const { filteredMacbooks } = useMacbookFilter();
  const macbook = filteredMacbooks[0];

  return (
    <div className="flex max-w-4xl items-center justify-between">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${macbook.image.url}`}
        width={440}
        height={440}
        alt="Imagem do MacBook Filtrado"
      />
      <Price />
    </div>
  );
}
