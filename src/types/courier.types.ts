export interface Courier {
  id: string;
  name: string;
  logo: string;
  baseRate: number;
  weightMultiplier: number;
  volumeMultiplier: number;
  taxRate: number;
  speed: number;
}
