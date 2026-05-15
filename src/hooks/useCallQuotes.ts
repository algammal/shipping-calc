import { fetchQuotes } from "../services/qouteService";
import { useQuote } from "./useQuote";
import type { QuoteFormData } from "../types/quote.types";

export const useCallQuotes = () => {
  const { dispatch } = useQuote();

  const getQuotes = async (payload: QuoteFormData) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });

      const data = await fetchQuotes(payload);

      dispatch({ type: "SET_QUOTES", payload: data });
    } catch {
      dispatch({
        type: "SET_ERROR",
        payload: "Failed to load courier quotes.",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return { getQuotes };
};