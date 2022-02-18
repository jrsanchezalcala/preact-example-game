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

type ArrayFilterItem = Array<FilterItemProps> | [];

export const TopSection: FunctionComponent<TopSectionProps> = ({
  title,
  children
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [filterItems, setFilterItems] = useState<ArrayFilterItem>([]);
  return (
    <Fragment>
      <x-title>{title}</x-title>
      <x-filter title={"SORT GAMES"} items={filterItems} />
    </Fragment>
  );
};
register(TopSection, "x-top-section");
