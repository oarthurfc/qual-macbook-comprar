// Strapi

export interface StrapiRequest<T> {
  data: T;
}

export interface StrapiListResponse<T> {
  data: StrapiDataItem<T>[];
  meta: StrapiMeta;

  [x: string]: any;
}

export interface StrapiResponse<T> {
  data: StrapiDataItem<T> | null;
}

export interface StrapiDataItem<T> {
  id: number;
  attributes: T;
}

export interface StrapiContentType {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiMeta {
  pagination: StrapiPagination;
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
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
