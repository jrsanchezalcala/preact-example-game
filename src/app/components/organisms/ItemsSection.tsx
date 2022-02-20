import { Fragment, FunctionComponent, JSX } from "preact";
import register from "preact-custom-element";
import { useState ,useEffect} from "preact/hooks";
import { Item } from "../molecules/Item";
import { ItemProps } from "../molecules/Item";
import "../molecules/Item";
import {DataService} from '../pages/Game';
declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-item'] : ItemProps
    }
  }
}

export interface ItemsSectionProps {
  items ?: Item[] | string;
}

export const ItemsSection: FunctionComponent<ItemsSectionProps> = (props
  
): JSX.Element => {
  let [items,setItems] = useState([]);
  useEffect(() => {
    
    getMore();
  },[]);

   const getMore = async () => {
    let moreitems = await DataService.getItems();
    setItems([...items,...moreitems]);
  }
  
  return <div class="items-section">
    {items && items.map((item) => {
      return <x-item item={JSON.stringify(item)} />
    })}
  </div>;
};
register(ItemsSection, "x-items-section",['items']);
