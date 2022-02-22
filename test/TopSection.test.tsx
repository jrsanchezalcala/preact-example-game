import { h } from "preact";
import { render } from "@testing-library/preact";

import "../src/app/componentsImports";

describe("TopSection", () => {
  test("should display top section tag", () => {
    const { container } = render(<x-top-section title="hola" />);
    expect(container.textContent).toMatch("hola");
  });
});
