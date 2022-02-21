import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import "../src/app/componentsImports";

describe("Button", () => {


  test("should handle click and display text", () => {
    const handleClick = jest.fn();

    const { container } = render(
      <x-button text="hola" onClick={() => {}}  />
    );
    container.addEventListener("click", handleClick);
    fireEvent.click(container);
    expect(container.textContent).toMatch("hola");
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
