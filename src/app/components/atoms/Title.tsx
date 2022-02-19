import { FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";

export interface TitleProps {
  text: string;
}

export const Title: FunctionComponent<TitleProps> = ({ text }): JSX.Element => {
  return <h1 class="title">{text}</h1>;
};
register(Title, "x-title", []);
