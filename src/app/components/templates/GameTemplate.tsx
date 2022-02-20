import { FunctionalComponent, h, JSX } from "preact";
import register from "preact-custom-element";
import { TopSectionProps } from "../organisms/TopSection";
import "../organisms/TopSection";
import { Item } from "../molecules/Item";
import  "../organisms/ItemsSection";
import {ItemsSectionProps} from "../organisms/ItemsSection";
import { Ref, useEffect, useImperativeHandle, useState } from "preact/hooks";
import {DataService} from '../pages/Game';
declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-top-section"]: TopSectionProps;
      ["x-items-section"]: ItemsSectionProps;
    }
  }
}

export interface GameTemplateProps {
  title: string;
  items?: Item[] | string;
  currency ?: string;
  ref ?: Ref<typeof GameTemplate>
}

export const GameTemplate: FunctionalComponent<GameTemplateProps> = ({
  title,currency
}): JSX.Element => {
  let [items,setItems] = useState([]);
  const getItems = () : Item[] => {
    let data = [] ;
    if(typeof items == "string"){
      data = JSON.parse(items);
    }
    return data ? data.map((item) => {
      item.currencyData = { [currency] : item.currencyData[currency]}
      return item;
    }) : [] ;
  }

 

  return (
    <div class="page">
      <div class="main">
        <x-top-section title={title} />
        <x-items-section />
      </div>
    </div>
  );
};
register(GameTemplate, "x-game-template",['items','title','currency']);
