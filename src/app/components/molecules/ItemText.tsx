import {
  Fragment,
  FunctionalComponent,
  FunctionComponent,
  h,
  JSX
} from 'preact';
import register from 'preact-custom-element';

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-item-text']: ItemTextProps
    }
  }
}

export type ItemTextProps = {
  title: string
  provider: string
  price: string
};

export const ItemText: FunctionalComponent<ItemTextProps> = ({
  provider,
  price,
  title
}): JSX.Element => {
  return (
    <div class='item-text'>
      <x-text text={provider} />
      <x-title tag='h5' text={title} />
      <x-text text={price} />
    </div>
  );
};
register(ItemText, 'x-item-text', ['provider', 'title', 'price']);
