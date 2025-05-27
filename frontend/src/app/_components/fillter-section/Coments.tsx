"use server";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export default async function Coments() {
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
      <p className="text-lg font-semibold text-foreground">
        É um macbookzinho de 15 anos atrás, tem um design bem atual, fino e com curvas bonitas, mas
        se trata de um hardware muito defasado. Não dá pra fazer quase nada hoje em dia com ele.
        <br />
        <br />
        Se você busca um macbook para uso leve e casual, recomendaria pegar um já com Core I5, esse
        aqui tem um uso limitadíssimo hoje em dia...
      </p>
    </div>
  );
}
