import {
  Fragment,
  FunctionalComponent,
  FunctionComponent,
  h,
  JSX
} from "preact";
import register from "preact-custom-element";
import { useState } from "preact/hooks";
import { FilterItemProps } from "../atoms/FilterItem";
import { FilterBarProps } from "../atoms/FilterBar";
import "../atoms/FilterItem";
import "../atoms/FilterBar";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-filter-item"]: FilterItemProps;
      ["x-filter-bar"]: FilterBarProps;
    }
  }
}

export type FilterProps = {
  title: string;
  items: FilterItemProps[];
  onChange?: (value) => void;
};

export const Filter: FunctionalComponent<FilterProps> = ({
  title,
  items,
  onChange,
  children
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <x-filter-bar title={title} open={false} />
      {items.map((item) => {
        <x-filter-item text={item.text} value={item.value} />;
      })}
    </Fragment>
  );
};
register(Filter, "x-filter", ["items", "title", "onChange"]);
