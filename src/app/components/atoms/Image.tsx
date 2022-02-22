import { FunctionComponent, h, JSX } from 'preact';
import register from 'preact-custom-element';

export interface ImageProps {
  url: string
  description?: string
}

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-image']: ImageProps
    }
  }
}
// TODO - put in cofiguration file
const host = 'https://www.lottoland.com';

export const Image: FunctionComponent<ImageProps> = ({
  url,
  description,
}): JSX.Element => {
  return <img className='image' src={host + url} alt={description || ''} />;
};
register(Image, 'x-image', ['url', 'description']);
