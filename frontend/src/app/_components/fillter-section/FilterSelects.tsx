"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMacbookFilter } from "@/contexts/MacBookFilterContext";

export default function FilterSelects() {
  const { filters, setFilters, availableOptions, clearFilters } = useMacbookFilter();

  const handleModelChange = (value: string) => {
    // Ao mudar o modelo, mantém apenas o modelo selecionado e limpa os outros filtros
    setFilters({ model: value });
  };

  return (
    <div className="flex items-center gap-5">
      <Select value={filters.model} onValueChange={handleModelChange}>
        <SelectTrigger>
          <SelectValue placeholder="Modelo" />
        </SelectTrigger>
        <SelectContent>
          {availableOptions.models.map((model) => (
            <SelectItem key={model} value={model}>
              {model}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.screenSize}
        onValueChange={(value) => setFilters({ ...filters, screenSize: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Tela" />
        </SelectTrigger>
        <SelectContent>
          {availableOptions.screenSizes.map((size) => (
            <SelectItem key={size} value={size}>
              {size}"
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.year}
        onValueChange={(value) => setFilters({ ...filters, year: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Ano" />
        </SelectTrigger>
        <SelectContent>
          {availableOptions.years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.processor}
        onValueChange={(value) => setFilters({ ...filters, processor: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Processador" />
        </SelectTrigger>
        <SelectContent>
          {availableOptions.processors.map((proc) => (
            <SelectItem key={proc} value={proc}>
              {proc}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
