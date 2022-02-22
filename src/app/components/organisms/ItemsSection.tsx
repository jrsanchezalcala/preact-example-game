import { FunctionComponent, JSX, h } from "preact";
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
  const [items, setItems] = useState<Item[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    let listener;
    if (loader == false) {
      console.log("items", items);
      listener = () => {
        scrolleventListener(items);
      };
      addScroll(listener);
    }
    return () => {
      removeScroll(listener);
    };
  }, [items]);
  useEffect(() => {
    const subscription = DataService.onChange.subscribe((items) => {
      setItems(items);
    });
    void getItems();
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const scrolleventListener = (items): void => {
    if (loader || !hasMore) return;
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && hasMore) {
      setLoader(true);
      window.scrollBy(0, -100);
      getMore(items);
    }
  };
  const addScroll = (listener): void => {
    console.log("llama add");
    window.addEventListener("scroll", listener, {
      passive: true
    });
  };

  const removeScroll = (listener): void => {
    console.log("llama remove");
    window.removeEventListener("scroll", listener);
  };
  const getMore = async (items: Item[]): Promise<void> => {
    const moreitems: Item[] = await DataService.getMore();

    if (moreitems && moreitems.length > 0) {
      setItems([...items, ...moreitems]);
    } else {
      setHasMore(false);
    }
    setLoader(false);
  };

  const getItems = async (): Promise<void> => {
    const moreitems: Item[] = await DataService.getItems();
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
