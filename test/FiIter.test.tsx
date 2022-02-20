import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import { FilterProps } from "../src/app/components/molecules/Filter";
import "../src/app/components/molecules/Filter";

describe("Filter", () => {
  test("should display title tag", () => {
    const { container } = render(
      <x-filter title="hola" onChange={() => {}} items={[]} />
    );
    expect(container.textContent).toMatch("hola");
  });
});
