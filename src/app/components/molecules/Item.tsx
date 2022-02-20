import { Fragment, FunctionalComponent, h, JSX } from "preact";
import register from "preact-custom-element";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-item"]: ItemProps;
    }
  }
}
export interface Item {
  name: string;
  displayName: string;
  playURL: string;
  image: string;
  detailURL: string;
  currencyData: Currency;
  provider?: [string];
  volatility?: [string];
}

export interface Currency {
  name?: string;
  simbol?: string;
  noMob?: boolean;
  noDesk?: boolean;
  minimumStake: number;
}

export type ItemProps = {
  item: Item | string;
  key?: string;
};
const getPriceText = (item: Item, currency: string) => {
  const minimun = item?.currencyData?.minimumStake;
  return minimun
    ? `${minimun} ${item.currencyData.simbol} min Stake`
    : `Not available in ${currency}`;
};
const handlePlay = (item: Item) => {};
export const ItemDisplay: FunctionalComponent<ItemProps> = ({
  item
}): JSX.Element => {
  const getItem = () => {
    return typeof item === "string" ? JSON.parse(item) : item;
  };
  const data: Item = getItem();
  return (
    <Fragment>
      <div class="item">
        <div class="item-col">
          <x-item-image text={data.displayName} src={data.image} />
        </div>
        <div class="item-col">
          <x-item-text
            price={getPriceText(data, "EUR")}
            provider={
              data?.provider ? data?.provider.join(", ") : "No provider"
            }
            title={data?.displayName || ""}
          />
        </div>
        <div class="item-col">
          <x-button
            text={"PLAY"}
            onClick={() => {
              handlePlay(data);
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};
register(ItemDisplay, "x-item", ["item"]);
