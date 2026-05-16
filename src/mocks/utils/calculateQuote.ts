import type { Courier } from "../../types/courier.types";

export const calculateQuote = (
  courier: Courier,
  weight: number,
  volume: number,
  routeMultiplier = 1,
  distanceFactor = 1
) => {
  const basePrice =
    (courier.baseRate +
      weight * courier.weightMultiplier +
      volume * courier.volumeMultiplier) *
    routeMultiplier;

  const tax = basePrice * courier.taxRate;
  const total = basePrice + tax;
  const baseEta = courier.speed;
  const routeEta = baseEta * distanceFactor;
  const loadFactor = weight * 0.2 + volume * 0.3;
  const eta = Math.ceil(routeEta + loadFactor);

  return {
    basePrice: Number(basePrice.toFixed(2)),
    tax: Number(tax.toFixed(2)),
    total: Number(total.toFixed(2)),
    eta,
  };
};