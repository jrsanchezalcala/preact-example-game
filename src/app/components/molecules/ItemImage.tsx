import { FunctionalComponent, h, JSX } from "preact";
import register from "preact-custom-element";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-item-image"]: ItemImageProps;
    }
  }
}

export type ItemImageProps = {
  text: string;
  src: string;
};

const host = "https://www.lottoland.com";

export const ItemImage: FunctionalComponent<ItemImageProps> = ({
  text,
  src
}): JSX.Element => {
  const getUrlImage = (src = "") => {
    return host + src;
  };
  return (
    <div class="item-image">
      <span icon="icon">
        <image src={"info.svg"} width="15" height="15" />
      </span>
      <x-image url={getUrlImage(src)} description={text || ""} />
    </div>
  );
};
register(ItemImage, "x-item-image", ["src", "text"]);
