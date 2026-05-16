import type { Control, UseFormReturn } from "react-hook-form";
import type { QuoteFormData } from "./quote.types";

export interface StepProps {
  control: Control<QuoteFormData>;
}

export interface MultiStepFormProps {
  methods: UseFormReturn<QuoteFormData>;
  isSearchedHandler: (value: boolean) => void;
  isSearched: boolean;
}
