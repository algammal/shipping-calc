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
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error; // keep original error message if it's from the if (!res.ok) block
    }
    throw new Error("Network error while fetching countries");
  }
};