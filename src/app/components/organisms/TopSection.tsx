import { Fragment, FunctionComponent, JSX } from "preact";
import register from "preact-custom-element";
import { FilterItemProps } from "../molecules/FilterItem";
import { DataService } from "../pages/Game";

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

const filterItems: Array<FilterItemProps> = [
  { text: "Name(A-Z)", value: "name_desc" },
  { text: "Stake (min to max)", value: "stake_asc" },
  { text: "Stake (max to min)", value: "stake_desc" }
];

export const TopSection: FunctionComponent<TopSectionProps> = ({
  title,
  children
}): JSX.Element => {
  const handleChange = (filterValue) => {
    DataService.setOrder(filterValue);
  };
  console.log(handleChange);
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
register(TopSection, "x-top-section");
