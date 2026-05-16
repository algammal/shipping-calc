import { z } from "zod";

export const quoteSchema = z.object({
  originCountry: z.string().min(1, "Origin Country is required"),
  destinationCountry: z.string().min(1, "Destination Country is required"),
  weight: z.number({ message: "Weight is required" }).positive("Weight must be greater than 0"),
  volume: z.number({ message: "Volume is required" }).positive("Volume must be greater than 0"),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;