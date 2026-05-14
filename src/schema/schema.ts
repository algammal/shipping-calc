import { z } from "zod";

export const quoteSchema = z.object({
  originCountry: z.string().min(1),
  destinationCountry: z.string().min(1),
  weight: z.number().positive(),
  volume: z.number().positive(),

});

export type QuoteFormData = z.infer<typeof quoteSchema>;