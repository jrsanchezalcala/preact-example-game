import {
  Fragment,
  FunctionalComponent,
  FunctionComponent,
  h,
  JSX
} from "preact";
import register from "preact-custom-element";
import { ItemTextProps } from "../molecules/ItemText";
import { ItemImageProps } from "../molecules/ItemImage";
import { ButtonProps } from "../atoms/Button";
import "../molecules/ItemImage";
import "../molecules/ItemText";
import "../atoms/Button";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-item-image"]: ItemImageProps;
      ["x-item-text"]: ItemTextProps;
      ["x-button"]: ButtonProps;
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
  [key: string]: {
    noMob?: boolean;
    noDesk?: boolean;
    minimumStake: number;
  };
}

export type ItemProps = {
  item: Item | string;
};
const getPriceText = (item: Item, currency: string) => {
  let minimun = item?.currencyData[currency]?.minimumStake
    ? item?.currencyData[currency]?.minimumStake
    : null;
  return minimun
    ? `${item.currencyData[currency].minimumStake} ${currency} min Stake`
    : `Not available in ${currency}`;
};
const handlePlay = (item: Item) => {};
export const ItemDisplay: FunctionalComponent<ItemProps> = ({
  item
}): JSX.Element => {
  const getItem = () => {
    return typeof item == "string" ? JSON.parse(item) : item;
  };
  let data = getItem();
  return (
    <Fragment>
      <div class="item">
        <div class="item-col">
          <x-item-image text={data.detailURL} src={data.image} />
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
