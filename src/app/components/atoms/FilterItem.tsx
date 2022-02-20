import { Fragment, FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";
import "../atoms/Text";
import "../atoms/Checkbox";
import { CheckboxProps } from "../atoms/Checkbox";
export interface FilterItemProps {
  text: string;
  value: string;
  checked?: boolean;
  onClick?: (e) => void;
  key?: string;
}
declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-checkbox"]: CheckboxProps;
    }
  }
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
