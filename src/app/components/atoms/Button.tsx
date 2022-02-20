import { FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-button"]: ButtonProps;
    }
  }
}
export interface ButtonProps {
  text: string;
  onClick: (e) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  onClick
}): JSX.Element => {
  return (
    <button class="button" type="button" onClick={onClick}>
      {text}
    </button>
  );
};
register(Button, "x-button", ["text", "onClick"]);
