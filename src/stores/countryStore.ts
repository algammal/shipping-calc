import type { Country } from "../types/country.types";

let countriesCache: Country[] | null = null;
let loadingPromise: Promise<Country[]> | null = null;

export const countryStore = {
  async getCountries(fetcher: () => Promise<Country[]>) {
    if (countriesCache) return countriesCache;

    if (!loadingPromise) {
      loadingPromise = fetcher()
        .then((data) => {
          countriesCache = data;
          return data;
        })
        .catch((err) => {
          loadingPromise = null;
          throw err;
        });
    }

    return loadingPromise;
  },
};