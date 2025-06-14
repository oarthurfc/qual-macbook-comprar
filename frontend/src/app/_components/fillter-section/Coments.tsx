"use client";

import { useMacbookFilter } from "@/contexts/MacBookFilterContext";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Coments() {
  const { filteredMacbooks } = useMacbookFilter();
  const macbook = filteredMacbooks[0];
  const [isExpanded, setIsExpanded] = useState(false);

  const content = macbook?.comment?.content;
  const MAX_LENGTH = 150;
  const isLongText = content && content.length > MAX_LENGTH;
  const displayText = isExpanded ? content : content?.slice(0, MAX_LENGTH) + "...";

  if (!content) {
    return null;
  }

  return (
    <div className="flex w-1/2 flex-col gap-3 pl-[10px]">
      <div className="flex gap-3">
        <Image
          src="/vitin.jpg"
          width={50}
          height={50}
          alt="Imagem do autor"
          className="object-cover"
        />

        <div className="flex flex-col gap-0">
          <div className="flex gap-1 text-lg font-semibold text-secondary">
            Resenha do Vitin <BadgeCheck color="#FFF" fill="#0071E3" strokeWidth={1} />
          </div>
          <span className="-mt-1 font-semibold text-foreground">@vitorbarroso</span>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold text-foreground">{displayText}</p>
        {isLongText && (
          <Button
            variant="link"
            className="mt-1 h-auto p-0 text-secondary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Ver menos" : "Ver mais"}
          </Button>
        )}
      </div>
    </div>
  );
}
