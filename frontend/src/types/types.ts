export interface StrapiContentType {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type MacBook = StrapiContentType & {
  model: string;
  screen_size: number;
  year: number;
  processor: string;
  ram_memory: number;
  storage: number;
  image: {
    id: number;
    documentId: string;
    alternativeText?: string;
    url: string;
  };
  relationedProducts?: RelationedProduct[];
  macbook_conditions?: MacBookCondition[];
  comment?: Comment;
};

export type FilterValues = {
  model?: string;
  screenSize?: string; // Mantendo como string para compatibilidade com o Select
  year?: string; // Mantendo como string para compatibilidade com o Select
  processor?: string;
};

export type MacbookFilterContextType = {
  filters: FilterValues;
  setFilters: (filters: FilterValues) => void;
  clearFilters: () => void;
  filteredMacbooks: MacBook[];
  allMacbooks: MacBook[];
  availableOptions: {
    models: string[];
    screenSizes: string[];
    years: string[];
    processors: string[];
  };
};

export type RelationedProduct = StrapiContentType & {
  title: string;
  affiliate_url: string;
  image: {
    id: number;
    documentId: string;
    alternativeText?: string;
    url: string;
  };
};

export type MacBookCondition = StrapiContentType & {
  condition: string;
  price_min: number;
  price_max: number;
  affiliate_url: string;
};

export type Comment = StrapiContentType & {
  content: string;
};
