import type { QuoteFormData } from "../schema/schema";

export type { QuoteFormData };

export type QuoteResponse = {
  id: string;
  name: string;
  logo: string;
  basePrice: number;
  tax: number;
  total: number;
  eta: number;
};

export type QuoteState = QuoteFormData & {
  quotes: QuoteResponse[];
  loading: boolean;
  error: string | null;
};

export type QuoteRequestBody = QuoteFormData;