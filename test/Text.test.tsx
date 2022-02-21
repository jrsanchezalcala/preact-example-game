import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import "../src/app/componentsImports";

describe("Text", () => {
  test("should display title tag", () => {
    const { container } = render(<x-text text={"hola"} />);
    expect(container.textContent).toMatch("hola");
  });
});
