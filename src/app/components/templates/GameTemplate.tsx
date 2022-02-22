import { FunctionalComponent, h, JSX } from "preact";
import register from "preact-custom-element";
import "../organisms/TopSection";
import { Item } from "../../../interfaces/Item";
import "../organisms/ItemsSection";
import { Ref, useState } from "preact/hooks";
import { DataService } from "../../service/DataService";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-game-template"]: GameTemplateProps;
    }
  }
}

export interface GameTemplateProps {
  title: string;
  items?: Item[] | string;
  currency?: string;
  ref?: Ref<typeof GameTemplate>;
}

export const GameTemplate: FunctionalComponent<GameTemplateProps> = ({
  title,
  currency
}): JSX.Element => {
  const [items, setItems] = useState([]);
  const getItems = (): Item[] => {
    let data = [];
    if (typeof items === "string") {
      data = JSON.parse(items);
    }
    return data
      ? data.map((item) => {
          item.currencyData = { [currency]: item.currencyData[currency] };
          return item;
        })
      : [];
  };

  DataService.setCurrency(currency);

  return (
    <div className="page">
      <div className="main">
        <x-top-section title={title} />
        <x-items-section />
      </div>
    </div>
  );
};
register(GameTemplate, "x-game-template", ["items", "title", "currency"]);
