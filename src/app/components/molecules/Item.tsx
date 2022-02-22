import { FunctionalComponent, h, JSX } from 'preact';
import register from 'preact-custom-element';
import { Item } from '../../../interfaces/Item';

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-item']: ItemProps
    }
  }
}
export type ItemProps = {
  item: Item | string
  key?: string
};
const getPriceText = (item: Item, currency: string): string => {
  const minimun = item?.currencyData?.minimumStake;
  return minimun
    ? `${minimun} ${item.currencyData.simbol} min Stake`
    : `Not available in ${currency}`;
};
// TODO - need to define
const handlePlay = (item: Item): void => {};
export const ItemDisplay: FunctionalComponent<ItemProps> = ({
  item
}): JSX.Element => {
  const getItem = (): Item => {
    return typeof item === 'string' ? (JSON.parse(item) as Item) : item;
  };
  const data: Item = getItem();
  return (
    <div className='item'>
      <div className='item-col'>
        <x-item-image text={data.displayName} src={data.image} />
      </div>
      <div className='item-col'>
        <x-item-text
          price={getPriceText(data, 'EUR')}
          provider={data?.provider ? data?.provider.join(', ') : 'No provider'}
          title={data?.displayName || ''}
        />
      </div>
      <div className='item-col'>
        <x-button
          text='PLAY'
          onClick={() => {
            handlePlay(data);
          }}
        />
      </div>
    </div>
  );
};
register(ItemDisplay, 'x-item', ['item']);
