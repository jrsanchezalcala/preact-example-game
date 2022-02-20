import { Fragment, FunctionComponent, JSX } from "preact";
import register from "preact-custom-element";
import { useState } from "preact/hooks";
import { FilterItemProps } from "../atoms/FilterItem";
import { TitleProps } from "../atoms/Title";
import { FilterProps } from "../molecules/Filter";
import "../atoms/Title";
import "../molecules/Filter";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-title"]: TitleProps;
      ["x-filter"]: FilterProps;
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
  return (
    <div class="top-section">
      <x-title text={title} />
      <x-filter title={"SORT GAMES"} items={JSON.stringify(filterItems)} />
    </div>
  );
};
register(TopSection, "x-top-section");
