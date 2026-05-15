import { http, HttpResponse } from "msw";
import { countries } from "./data/countries";
import { couriers } from "./data/couriers";
import { calculateQuote } from "./utils/calculateQuote";
import type { QuoteRequestBody } from "../types/quote.types";

export const countryHandlers = [
  http.get("/api/countries", async () => {
    await new Promise((res) => setTimeout(res, 800));

    try {
      // Simulate random backend failure (20% chance)
      const shouldFail = Math.random() < 0.2;

      if (shouldFail) {
        throw new Error("Country service is down");
      }

      return HttpResponse.json(countries, {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      });
    } catch (error) {
      return HttpResponse.json(
        {
          message: "Failed to load countries. Please retry.",
        },
        { status: 500 }
      );
    }
  }),
];

export const quoteHandlers = [
  http.post("/api/quotes", async ({ request }) => {
    await new Promise((res) => setTimeout(res, 1200));

    const body = (await request.json()) as QuoteRequestBody;
    const { weight, volume } = body;

    const results = couriers.map((c) => {
      const pricing = calculateQuote(c, weight, volume);

      return {
        id: c.id,
        name: c.name,
        logo: c.logo,
        ...pricing,
      };
    });

    return HttpResponse.json(results);
  }),
];