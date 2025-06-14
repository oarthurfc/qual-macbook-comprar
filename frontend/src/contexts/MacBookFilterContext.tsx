"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { FilterValues, MacBook, MacbookFilterContextType } from "@/types/types";

const MacbookFilterContext = createContext<MacbookFilterContextType | undefined>(undefined);

export function MacbookFilterProvider({
  children,
  macbooks,
}: {
  children: React.ReactNode;
  macbooks: { data: MacBook[] };
}) {
  const [filters, setFilters] = useState<FilterValues>({});

  // Encontra apenas 1 MacBook que corresponda aos filtros
  const filteredMacbooks = useMemo(() => {
    const filtered = macbooks.data.find((macBook) => {
      return (
        (!filters.model || macBook.model === filters.model) &&
        (!filters.screenSize || macBook.screen_size === Number(filters.screenSize)) &&
        (!filters.year || macBook.year === Number(filters.year)) &&
        (!filters.processor || macBook.processor === filters.processor)
      );
    });
    return filtered ? [filtered] : [];
  }, [filters, macbooks]);

  const clearFilters = () => {
    setFilters({});
  };

  // Opções disponíveis para cada filtro baseado nas seleções anteriores
  const availableOptions = useMemo(() => {
    const baseData = macbooks.data;

    // Modelos ordenados alfabeticamente
    const models = [...new Set(baseData.map((m) => m.model))].sort();

    // Filtra MacBooks baseado nos filtros já selecionados (exceto modelo)
    const filteredData = baseData.filter((macBook) => {
      return (
        (!filters.screenSize || macBook.screen_size === Number(filters.screenSize)) &&
        (!filters.year || macBook.year === Number(filters.year)) &&
        (!filters.processor || macBook.processor === filters.processor)
      );
    });

    // Opções filtradas e ordenadas para os outros campos
    const screenSizes = [
      ...new Set(
        filteredData
          .filter((m) => !filters.model || m.model === filters.model)
          .map((m) => m.screen_size.toString())
      ),
    ].sort((a, b) => Number(a) - Number(b));

    const years = [
      ...new Set(
        filteredData
          .filter((m) => !filters.model || m.model === filters.model)
          .map((m) => m.year.toString())
      ),
    ].sort((a, b) => Number(a) - Number(b));

    const processors = [
      ...new Set(
        filteredData
          .filter((m) => !filters.model || m.model === filters.model)
          .map((m) => m.processor)
      ),
    ].sort();

    return {
      models,
      screenSizes,
      years,
      processors,
    };
  }, [filters, macbooks]);

  return (
    <MacbookFilterContext.Provider
      value={{
        filters,
        setFilters,
        clearFilters,
        filteredMacbooks,
        allMacbooks: macbooks.data,
        availableOptions,
      }}
    >
      {children}
    </MacbookFilterContext.Provider>
  );
}

export function useMacbookFilter() {
  const context = useContext(MacbookFilterContext);
  if (!context) {
    throw new Error("useMacbookFilter deve ser usado dentro do MacbookFilterProvider");
  }
  return context;
}
