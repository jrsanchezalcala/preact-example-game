import { Fragment, FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-filter-item"]: FilterItemProps;
    }
  }
}

export interface FilterItemProps {
  text: string;
  value: string;
  checked?: boolean;
  onClick?: (e) => void;
  key?: string;
}

export const FilterItem: FunctionComponent<FilterItemProps> = ({
  text,
  value,
  checked,
  onClick
}): JSX.Element => {
  return (
    <div class="filter-item">
      <x-checkbox mark={checked} onClick={onClick} value={value} />
      <x-text text={text} />
    </div>
  );
};
register(FilterItem, "x-filter-item", ["text", "value"]);
