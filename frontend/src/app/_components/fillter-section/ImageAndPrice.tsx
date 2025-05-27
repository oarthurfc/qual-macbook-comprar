"use server"

import Image from "next/image";
import Price from "./Price";

export default async function ImageAndPrice() {
  return (
    <div className="flex justify-between items-center max-w-4xl">
      <Image src="/filter-macbook.png" width={500} height={500} alt="Imagem do MacBook Filtrado" />
      <Price />
    </div>
  );
}
