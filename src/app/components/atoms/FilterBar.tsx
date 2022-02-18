import {
  Fragment,
  FunctionalComponent,
  FunctionComponent,
  h,
  JSX
} from "preact";
import register from "preact-custom-element";

export interface FilterBarProps {
  title: string;
  open: boolean;
}

export const FilterBar: FunctionComponent<{ title: string; open: string }> = ({
  title,
  open,
  children
}): JSX.Element => {
  return <Fragment>filter bar</Fragment>;
};
register(FilterBar, "x-filter-bar", ["title", "open"]);

export type FilterBarType = FunctionalComponent<FilterBarProps>;
