import { FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";
export interface ImageProps {
  url: string;
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
  url,
  description
}): JSX.Element => {
  console.log(url);
  return <img class="image" src={url} alt={description || ""} />;
};
register(Image, "x-image", ["url", "description"]);
