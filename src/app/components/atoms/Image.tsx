import { FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";
export interface ImageProps {
  src: string;
  description?: string;
}

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-image"]: ImageProps;
    }
  }
}

export const Image: FunctionComponent<ImageProps> = ({
  src,
  description
}): JSX.Element => {
  return <img class="image" src={src} alt={description || ""} />;
};
register(Image, "x-image", ["src", "description"]);
