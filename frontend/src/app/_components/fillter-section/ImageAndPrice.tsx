"use server";

import Image from "next/image";
import Price from "./Price";

export default async function ImageAndPrice() {
  return (
    <div className="flex max-w-4xl items-center justify-between">
      <Image src="/filter-macbook.png" width={500} height={500} alt="Imagem do MacBook Filtrado" />
      <Price />
    </div>
  );
}
