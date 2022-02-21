import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";
import "../src/app/componentsImports";
describe("FilterBar", () => {
  test("should display text and handle click", () => {
    var handleClick = jest.fn();
    var onClick = () => {};
    const { container } = render(
      <x-filter-bar open={false} title="hola" onClick={onClick} />
    );
    container.addEventListener("click", handleClick);
    fireEvent.click(container);
    expect(container.textContent).toMatch("hola");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should be distinct aspect on different open values", () => {
    var onClick = () => {};
    const prop1 = render(
      <x-filter-bar open={false} title="hola" onClick={onClick} />
    );
    const prop2 = render(
      <x-filter-bar open={true} title="hola" onClick={onClick} />
    );
    expect(prop1.container.innerHTML !== prop2.container.innerHTML).toBe(true);
  });

});
