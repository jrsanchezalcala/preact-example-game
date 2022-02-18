import { Fragment, FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";
export interface FilterItemProps {
  text: string;
  value: string;
}

export const FilterItem: FunctionComponent<FilterItemProps> = ({
  text,
  value
}): JSX.Element => {
  return <Fragment>filter item</Fragment>;
};
register(FilterItem, "x-filter-item", ["text", "value"]);
