import { Currency } from './Currency';

export interface Item {
  name: string
  displayName: string
  playURL: string
  image: string
  detailURL: string
  currencyData: Currency
  provider?: [string]
  volatility?: [string]
}
