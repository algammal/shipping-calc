import React, { createContext, useReducer } from "react";
import type { ReactNode } from "react";
import type {
  QuoteFormData,
  QuoteState,
  QuoteResponse,
} from "../types/quote.types";

type QuoteAction =
  | { type: "SET_STEP_DATA"; payload: Partial<QuoteFormData> }
  | { type: "SET_QUOTES"; payload: QuoteResponse[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET" };

const initialState: QuoteState = {
  originCountry: "",
  destinationCountry: "",
  weight: 0,
  volume: 0,
  quotes: [],
  loading: false,
  error: null,
};

function quoteReducer(state: QuoteState, action: QuoteAction): QuoteState {
  switch (action.type) {
    case "SET_STEP_DATA":
      return { ...state, ...action.payload };

    case "SET_QUOTES":
      return { ...state, quotes: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export const QuoteContext = createContext<{
  state: QuoteState;
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