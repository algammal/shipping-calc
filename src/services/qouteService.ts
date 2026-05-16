import type { QuoteFormData, QuoteResponse } from "../types/quote.types";

export const fetchQuotes = async (
  payload: QuoteFormData
): Promise<QuoteResponse[]> => {
  const res = await fetch("/api/quotes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to fetch quotes");

  return res.json();
};