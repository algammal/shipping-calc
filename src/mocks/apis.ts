import { http, HttpResponse } from "msw";
import { countries } from "./data/countries";
import { couriers } from "./data/couriers";
import { calculateQuote } from "./utils/calculateQuote";
import type { QuoteRequestBody } from "../types/quote.types";

const getRouteMultiplier = (originCountry: string, destinationCountry: string) => {
  const normalize = (value: string) =>
    value
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const originScore = normalize(originCountry);
  const destinationScore = normalize(destinationCountry);
  const diff = Math.abs(originScore - destinationScore);

  return Number((1 + Math.min(0.5, diff / 800)).toFixed(3));
};

const isCourierAvailable = (
  courier: any,
  weight: number,
  volume: number,
  routeMultiplier: number
) => {
  const idNumber = Number(courier.id.replace(/\D/g, "") || 0);
  
  // Simpler capacity limits: based on courier index, some have lower limits
  const maxWeight = 100 - idNumber * 0.3;
  const maxVolume = 200 - idNumber * 0.5;
  
  // Route constraint: far routes (>1.3 multiplier) only for speed=1 couriers
  const routeOk = routeMultiplier <= 1.3 || courier.speed === 1;

  return weight <= maxWeight && volume <= maxVolume && routeOk;
};

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
    const { originCountry, destinationCountry, weight, volume } = body;
    const routeMultiplier = getRouteMultiplier(originCountry, destinationCountry);

    const availableCouriers = couriers.filter((c) =>
      isCourierAvailable(c, weight, volume, routeMultiplier)
    );

    const results = availableCouriers.map((c) => {
      const pricing = calculateQuote(c, weight, volume, routeMultiplier);

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