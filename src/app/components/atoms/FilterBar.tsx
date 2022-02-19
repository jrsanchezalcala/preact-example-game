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
  return (
    <div class="filter-bar">
      <span class="icon">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 24 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            points="7.086 3.174 17.086 13.174 7.086 23.174"
            transform="scale(1 -1) rotate(-89 -1.32 0)"
          />
        </svg>
      </span>
      <span class="title">{title}</span>
    </div>
  );
};
register(FilterBar, "x-filter-bar", ["title", "open"]);

export type FilterBarType = FunctionalComponent<FilterBarProps>;
