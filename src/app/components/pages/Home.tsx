import { h, JSX } from 'preact';
import register from 'preact-custom-element';
import {Image} from '../atoms/Image';
import '../atoms/Image';

 type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };

 type CustomElement<T, K extends string = ''> = Partial<T & { children: any } & CustomEvents<`on${K}`>>;

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-image'] : CustomElement<typeof Image>
    }
  }
}

export const Home = (): JSX.Element => {

  return <div>
    <h1>HOLA</h1>
    <x-image /> ;
  </div>;
};
register(Home, 'x-home');
