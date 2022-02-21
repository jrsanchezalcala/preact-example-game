import {  h,FunctionComponent, JSX } from "preact";
import register from "preact-custom-element";
import { FilterItemProps } from "../molecules/FilterItem";
import { DataService } from "../../service/DataService";
import { useState } from "preact/hooks";
import { Item, ItemDisplay } from "../molecules/Item";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-top-section"]: TopSectionProps;
    }
  }
}

export interface TopSectionProps {
  title: string;
}

const InitialFilterItems: Array<FilterItemProps> = [
  { text: "Name(A-Z)", value: "name_desc", mark: true },
  { text: "Stake (min to max)", value: "stake_asc", mark: false },
  { text: "Stake (max to min)", value: "stake_desc", mark: false }
];

export const TopSection: FunctionComponent<TopSectionProps> = ({
  title,
  children
}): JSX.Element => {
  const [filterItems, setFilterItems] = useState(InitialFilterItems);

  const handleChange = (event: CustomEvent) => {
    const { detail } = event;
    if (detail) {
      DataService.setOrder(detail);
      const newItems = filterItems.map((item) => {
        item.mark = item.value == detail;
        return item;
      });
      setFilterItems(newItems);
    }
  };
  return (
    <div class="top-section">
      <x-title text={title} />
      <x-filter
        title={"SORT GAMES"}
        items={JSON.stringify(filterItems)}
        onChange={handleChange}
      />
    </div>
  );
};
register(TopSection, "x-top-section",["title"]);
