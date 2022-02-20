import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import "../src/app/componentsImports";

describe("Filter", () => {
  test("should display title tag", () => {
    const { container } = render(
      <x-filter title="hola" onChange={() => {}} items={[]} />
    );
    expect(container.textContent).toMatch("hola");
  });
});
