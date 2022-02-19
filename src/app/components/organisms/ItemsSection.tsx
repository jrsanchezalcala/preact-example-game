import { Fragment, FunctionComponent, JSX } from "preact";
import register from "preact-custom-element";
import { useState } from "preact/hooks";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {}
  }
}

export interface ItemsSectionProps {
  title: string;
}

export const ItemsSection: FunctionComponent<ItemsSectionProps> = ({
  title,
  children
}): JSX.Element => {
  const [items, setItems] = useState([]);
  return <div class="top-section"></div>;
};
register(ItemsSection, "x-items-section");
