"use client";

import { useMacbookFilter } from "@/contexts/MacBookFilterContext";

export default function Especifications() {
  const { filteredMacbooks } = useMacbookFilter();
  console.log("Filtered Macbooks", filteredMacbooks);
  const macbook = filteredMacbooks[0];

  if (!macbook) {
    return (
      <div>
        <h3 className="pb-6 text-xl font-bold text-secondary">Específicações</h3>
        <p className="text-muted-foreground">Selecione os filtros para ver as especificações</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="pb-6 text-xl font-bold text-secondary">Específicações</h3>
      <ul className="flex flex-col gap-3">
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Modelo: </span>
            {macbook.model}
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Tamanho: </span>
            {macbook.screen_size}"
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Processador: </span>
            {macbook.processor}
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Memória RAM: </span>
            {macbook.ram_memory}GB
          </p>
        </li>
        <li>
          <p className="font-semibold text-foreground">
            <span className="font-bold text-secondary">Armazenamento: </span>
            {macbook.storage}GB
          </p>
        </li>
      </ul>
    </div>
  );
}
