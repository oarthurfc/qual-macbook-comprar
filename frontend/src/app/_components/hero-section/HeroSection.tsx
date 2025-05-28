"use server";

import Image from "next/image";
import ScrollButton from "./ScrollButton";

export default async function HeroSection() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-center gap-14 bg-gradient-to-b from-[#D4EAF6] via-[#FAFAFA] to-white text-center">
      <h1 className="max-w-lg bg-gradient-to-r from-[#022640] to-[#5786AB] bg-clip-text text-5xl font-bold text-transparent">
        Qual MacBook comprar em 2025?
      </h1>
      <Image src="/hero-macbook.png" alt="Logo" width={694} height={332} />
      <div className="flex max-w-md flex-col items-center gap-4 pb-9">
        <p className="gap-4 text-xl font-semibold text-foreground">
          Descubra a faixa de preço ideal com base em modelo, tamanho da tela e ano.
        </p>
        <ScrollButton />
      </div>
    </main>
  );
}
