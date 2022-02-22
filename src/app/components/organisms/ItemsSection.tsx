import { Fragment, FunctionComponent, JSX, h } from "preact";
import register from "preact-custom-element";
import { useState, useEffect } from "preact/hooks";
import { Item } from "../../../interfaces/Item";
import { DataService } from "../../service/DataService";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-items-section"]: ItemsSectionProps;
    }
  }
}

export interface ItemsSectionProps {
  items?: Item[] | string;
}

export const ItemsSection: FunctionComponent<ItemsSectionProps> = (
  props
): JSX.Element => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const subscription = DataService.onChange.subscribe((items) => {
      setItems(items);
    });
    getItems();
    return () => subscription.unsubscribe();
  }, []);

  // TODO - implemente infinitum scroll
  const getMore = async () => {
    const moreitems = await DataService.getMore();
    setItems([...items, ...moreitems]);
  };

  const getItems = async () => {
    const moreitems = await DataService.getItems();
    setItems([...items, ...moreitems]);
  };

  return (
    <div className="items-section">
      {items &&
        items.map((item: Item) => {
          return <x-item key={item.name} item={JSON.stringify(item)} />;
        })}
    </div>
  );
};
register(ItemsSection, "x-items-section", ["items"]);
