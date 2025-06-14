"use client";

import { useMacbookFilter } from "@/contexts/MacBookFilterContext";
import { ArrowDown, BadgeCheck, ChevronDown, ChevronUp, CornerRightDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Coments() {
  const { filteredMacbooks } = useMacbookFilter();
  const macbook = filteredMacbooks[0];
  const [isExpanded, setIsExpanded] = useState(false);

  const content = macbook?.comment?.content;
  const MAX_LENGTH = 300;
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
        <p className="text-lg font-semibold text-foreground">
          {displayText}

          {isLongText && (
            <Button
              className="ml-1 h-auto rounded-full bg-blue-400 p-0 text-white"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="flex flex-row items-center gap-0.5 pl-2 pr-1 font-semibold">
                {isExpanded ? "Ver menos" : "Ver mais"}
                {isExpanded ? <ChevronUp /> : <ChevronDown />}
              </span>
            </Button>
          )}
        </p>
      </div>
    </div>
  );
}
