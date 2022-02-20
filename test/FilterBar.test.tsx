import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";
import "../src/app/componentsImports";
describe("FilterBar", () => {
  test("should display title tag", () => {
    var onClick = () => {};
    const { container } = render(
      <x-filter-bar open={false} title="hola" onClick={onClick} />
    );
    expect(container.textContent).toMatch("hola");
  });
});
