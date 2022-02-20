import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import { FilterBarProps } from "../src/app/components/molecules/FilterBar";
import "../src/app/components/molecules/FilterBar";

describe("FilterBar", () => {
  test("should display title tag", () => {
    const { container } = render(<x-filter-bar open={false} title="hola" />);
    expect(container.textContent).toMatch("hola");
  });
});
