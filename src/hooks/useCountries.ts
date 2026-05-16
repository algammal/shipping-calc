import { useEffect, useState } from "react";
import { fetchCountries } from "../services/countryService";
import { countryStore } from "../stores/countryStore";
import type { CountryOption } from "../types/country.types";

export const useCountries = () => {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    setError(null);

    countryStore
      .getCountries(fetchCountries)
      .then((data) => {
        let transformed = data.map((country) => ({
          label: country.name,
          value: country.code,
        }));
        setCountries(transformed);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    load();
  }, []);

  return { countries, loading, error, retry: load };
};