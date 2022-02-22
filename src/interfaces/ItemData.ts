import { Currency } from './Currency';

export interface ItemData {
  name: string
  displayName: string
  playURL: string
  image: string
  detailURL: string
  currencyData: Record<string,Currency>
  provider?: [string]
  volatility?: [string]
}
