import {
  Fragment,
  FunctionalComponent,
  FunctionComponent,
  h,
  JSX
} from "preact";
import register from "preact-custom-element";
import { useState } from "preact/hooks";
import { FilterItemProps } from "./FilterItem";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-filter"]: FilterProps;
    }
  }
}

export type FilterProps = {
  title: string;
  items: FilterItemProps[] | string;
  onChange?: (value) => void;
};

export const Filter: FunctionalComponent<FilterProps> = ({
  title,
  items,
  onChange,
  children
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  items = (
    typeof items == "string" ? JSON.parse(items) : items
  ) as FilterItemProps[];

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  const handleCheck = (newvalue, callback) => {
    if (value !== newvalue) {
      setValue(newvalue);
      if (callback) callback(newvalue);
    }
  };

  if (!value && items && items.length > 0) {
    setValue(items[0].value);
  }
  console.log(onChange);

  return (
    <div class={"filter " + (open ? "open" : "")}>
      <x-filter-bar onClick={handleClick} title={title} open={open} />
      {open ? (
        <div class={"filter-items " + (open ? "open" : "")}>
          {items &&
            items.map((item) => {
              return (
                <x-filter-item
                  key={item.value}
                  text={item.text}
                  value={item.value}
                  checked={item.checked ? true : false}
                  onClick={(newvalue) => {
                    handleCheck(newvalue, onChange);
                  }}
                />
              );
            })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
register(Filter, "x-filter", ["items", "title", "onChange"]);
