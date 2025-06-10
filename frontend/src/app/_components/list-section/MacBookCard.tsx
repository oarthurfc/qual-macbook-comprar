"use client";

import { MacBook } from "@/types/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function MacBookCard({ macBooks }: { macBooks: { data: MacBook[] } }) {
  console.log("MacBooks no Card antes do filter", macBooks);

  return (
    <div className="grid grid-cols-3 gap-5">
      {macBooks.data
        .filter((macBook) =>
          macBook.macbook_conditions?.some((condition) => condition.condition === "new")
        )
        .map((macBook) => {
          const newCondition = macBook.macbook_conditions?.find(
            (condition) => condition.condition === "new"
          );

          const affiliateLink = newCondition?.affiliate_url || "https://apple.com";

          return (
            <div
              key={macBook.id}
              className="flex min-h-[480px] flex-col items-center justify-between gap-9 rounded-2xl bg-white p-8 shadow-soft transition-transform duration-300 ease-in-out hover:scale-[1.01]"
            >
              <div className="my-auto flex">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${macBook.image.url}`}
                  width={200}
                  height={200}
                  alt={macBook.image.alternativeText || "Imagem do MacBook"}
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 text-center">
                  <h5 className="text-lg font-bold text-secondary">
                    {macBook.model} {macBook.screen_size}” {macBook.processor}
                  </h5>
                  <div className="flex flex-col gap-0 pt-2">
                    <span className="text-sm">Preço sugerido</span>
                    <p className="text-xl font-bold text-secondary">
                      R$ {newCondition?.price_min}~{newCondition?.price_max}
                    </p>
                  </div>
                </div>

                <Link href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <Button>
                    Comprar com desconto
                    <ArrowUpRight />
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}
