import { Fragment, FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";
import { useRef } from "preact/hooks";

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
  mark?: boolean;
  key?: string;
  onClick?: (e) => void;
}

export const FilterItem: FunctionComponent<FilterItemProps> = ({
  text,
  value,
  mark
}): JSX.Element => {
  const ref = useRef(null);

  if (typeof mark == "string" && mark == "false") mark = false;

  return (
    <div ref={ref} class="filter-item">
      <x-checkbox mark={mark} value={value} />
      <x-text text={text} />
    </div>
  );
};
register(FilterItem, "x-filter-item", ["text", "value", "mark"]);
