import { useContext } from "react";
import { QuoteContext } from "../context/QuoteContext";

export const useQuote = () => {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used inside QuoteProvider");
  return ctx;
};