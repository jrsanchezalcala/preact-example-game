import { FunctionalComponent, h, JSX } from 'preact';
import register from 'preact-custom-element';

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-item-image']: ItemImageProps
    }
  }
}

export type ItemImageProps = {
  text: string
  src: string
};

export const ItemImage: FunctionalComponent<ItemImageProps> = ({
  text,
  src
}): JSX.Element => {
  return (
    <div className='item-image'>
      <span class='icon'>
        <img src='info.svg' width='15' height='15' />
      </span>
      <x-image url={src} description={text || ''} />
    </div>
  );
};
register(ItemImage, 'x-item-image', ['src', 'text']);
