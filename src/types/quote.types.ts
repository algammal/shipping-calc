export type QuoteFormData = {
  originCountry: string;
  destinationCountry: string;
  weight: number;
  volume: number;
};

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