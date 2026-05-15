let countriesCache: any[] | null = null;
let loadingPromise: Promise<any[]> | null = null;

export const countryStore = {
  async getCountries(fetcher: () => Promise<any[]>) {
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