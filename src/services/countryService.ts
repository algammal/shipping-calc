export const fetchCountries = async () => {
  try {
    const res = await fetch("/api/countries");

    if (!res.ok) {
      const errorBody = await res.json().catch(() => null);

      throw new Error(
        errorBody?.message || "Failed to fetch countries from server"
      );
    }

    return await res.json();
  } catch (error: any) {
    throw new Error(
      error.message || "Network error while fetching countries"
    );
  }
};