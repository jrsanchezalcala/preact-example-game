import { FunctionComponent, h, JSX } from 'preact';
import register from 'preact-custom-element';

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ['x-title']: TitleProps
    }
  }
}

export interface TitleProps {
  text: string
  tag?: string
}

export const Title: FunctionComponent<TitleProps> = ({
  text,
  tag = 'h1',
}): JSX.Element => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  // @ts-ignore
  return <Tag class='title'>{text}</Tag>;
};
register(Title, 'x-title', []);
