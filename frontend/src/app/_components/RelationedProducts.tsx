"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RelationedProducts() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-11 pb-24">
      <h2 className="text-5xl font-bold text-secondary">Produtos Relacionados</h2>

      <div className="grid grid-cols-2 gap-5">
        <Link
          href="https://google.com"
          className="flex min-h-[550px] flex-col items-center justify-between gap-9 rounded-2xl bg-white p-8 shadow-soft transition-transform duration-300 ease-in-out hover:scale-[1.01]"
        >
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold">CATEGORIA</span>
            <h4 className="text-3xl font-bold text-secondary">
              Bateria Compatível Com Macbook Air 13" (2009)
            </h4>
          </div>

          <Image
            src="/hero-macbook.png"
            width={310}
            height={310}
            alt="Imagem do produto relacionado"
          />

          <div className={cn(buttonVariants({ variant: "default", size: "default" }))}>
            Comprar com desconto
            <ArrowUpRight />
          </div>
        </Link>

        <Link
          href="https://google.com"
          className="flex min-h-[550px] flex-col items-center justify-between gap-9 rounded-2xl bg-white p-8 shadow-soft transition-transform duration-300 ease-in-out hover:scale-[1.01]"
        >
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold">CATEGORIA</span>
            <h4 className="text-3xl font-bold text-secondary">
              Bateria Compatível Com Macbook Air 13" (2009)
            </h4>
          </div>

          <Image src="/image-2.png" width={310} height={310} alt="Imagem do produto relacionado" />

          <div className={cn(buttonVariants({ variant: "default", size: "default" }))}>
            Comprar com desconto
            <ArrowUpRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
