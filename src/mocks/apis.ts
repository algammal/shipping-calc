import { http, HttpResponse } from "msw";
import { countries } from "./data/countries";

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