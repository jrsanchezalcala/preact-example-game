import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";
import "../src/app/componentsImports";
describe("FilterBar", () => {
  test("should display title tag", () => {
    const { container } = render(<x-filter-bar open={false} title="hola" />);
    expect(container.textContent).toMatch("hola");
  });
});
