import { FunctionComponent, JSX, h } from 'preact';
import register from 'preact-custom-element';
import { useState, useEffect } from 'preact/hooks';
import { Item } from '../../../interfaces/Item';
import { DataService } from '../../service/DataService';

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-items-section']: ItemsSectionProps
    }
  }
}

export interface ItemsSectionProps {
  items?: Item[] | string
}

export const ItemsSection: FunctionComponent<
  ItemsSectionProps
> = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const subscription = DataService.onChange.subscribe((items) => {
      setItems(items);
    });
    void getItems();
    return () => subscription.unsubscribe();
  }, []);

  // TODO - implemente infinitum scroll
  const getMore = async (): Promise<void> => {
    const moreitems: Item[] = await DataService.getMore();
    setItems([...items, ...moreitems]);
  };

  const getItems = async (): Promise<void> => {
    const moreitems: Item[] = await DataService.getItems();
    setItems([...items, ...moreitems]);
  };

  return (
    <div className='items-section'>
      {items &&
        items.map((item: Item) => {
          return <x-item key={item.name} item={JSON.stringify(item)} />;
        })}
    </div>
  );
};
register(ItemsSection, 'x-items-section', ['items']);
