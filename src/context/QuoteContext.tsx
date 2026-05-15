import React, { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import type { QuoteFormData } from "../types/quote.types";
type QuoteAction =
  | { type: "SET_STEP_DATA"; payload: QuoteFormData }
  | { type: "RESET" };

const initialState: QuoteFormData = {
  originCountry: "",
  destinationCountry: "",
  weight: 0,
  volume: 0,
};

function quoteReducer(state: QuoteFormData, action: QuoteAction): QuoteFormData {
  switch (action.type) {
    case "SET_STEP_DATA":
      return { ...state, ...action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export const QuoteContext = createContext<{
  state: QuoteFormData;
  dispatch: React.Dispatch<QuoteAction>;
} | null>(null);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialState);

  return (
    <QuoteContext.Provider value={{ state, dispatch }}>
      {children}
    </QuoteContext.Provider>
  );
};