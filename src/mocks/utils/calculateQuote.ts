export const calculateQuote = (
  courier: any,
  weight: number,
  volume: number
) => {
  const basePrice =
    courier.baseRate +
    weight * courier.weightMultiplier +
    volume * courier.volumeMultiplier;

  const tax = basePrice * courier.taxRate;
  const total = basePrice + tax;

  return {
    basePrice: Number(basePrice.toFixed(2)),
    tax: Number(tax.toFixed(2)),
    total: Number(total.toFixed(2)),
    eta: courier.speed,
  };
};