import { FunctionalComponent, h, JSX } from "preact";
import register from "preact-custom-element";
import { useState, useRef } from "preact/hooks";
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
  onChange
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  items = (
    typeof items === "string" ? JSON.parse(items) : items
  ) as FilterItemProps[];

  const ref = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  const handleCheck = (item): void => {
    ref.current.dispatchEvent(
      new CustomEvent("change", { detail: item.value, bubbles: true })
    );
  };

  return (
    <div ref={ref} class={"filter " + (open ? "open" : "")}>
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
                  mark={Boolean(item.mark)}
                  onClick={(newvalue) => {
                    handleCheck(item);
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
register(Filter, "x-filter", ["onChange", "items", "title"]);
