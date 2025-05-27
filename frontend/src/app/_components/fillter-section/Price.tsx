"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Price() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-secondary">
        <p className="text-xs font-semibold">PREÇO SUGERIDO</p>
        <p className="text-4xl font-bold">R$ 4.600~5.200</p>
      </div>
      <Button>
        Comprar com desconto
        <ArrowUpRight />
      </Button>
    </div>
  );
}
