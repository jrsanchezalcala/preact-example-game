import { FunctionComponent, h, JSX } from 'preact';
import register from 'preact-custom-element';

export interface TextProps {
  text: string
}
declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-text']: TextProps
    }
  }
}
export const Text: FunctionComponent<TextProps> = ({ text }): JSX.Element => {
  return <span className='text'>{text}</span>;
};
register(Text, 'x-text', ['text']);
