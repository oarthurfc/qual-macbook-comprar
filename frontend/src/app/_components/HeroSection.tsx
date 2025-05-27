"use server"

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function HeroSection() {
  return (
    <main className="flex flex-col justify-center items-center gap-14 max-w-5xl mx-auto min-h-screen text-center pb-10">
      <h1 className="max-w-lg text-5xl font-bold bg-gradient-to-r from-[#022640] to-[#5786AB] bg-clip-text text-transparent">
        Qual MacBook comprar em 2025?
      </h1>
      <Image src="/hero-macbook.png" alt="Logo" width={694} height={332} />
      <div className="flex flex-col max-w-md items-center gap-4">
        <p className="text-foreground text-xl font-semibold gap-4">
          Descubra a faixa de preço ideal com base em modelo, tamanho da tela e ano.
        </p>
        <Button>Começar agora</Button>
      </div>
    </main>
  );
}
