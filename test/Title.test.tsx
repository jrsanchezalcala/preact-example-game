import { h } from "preact";
import { render } from "@testing-library/preact";

import "../src/app/componentsImports";

describe("Title", () => {
  test("should display title tag", () => {
    const { container } = render(<x-title text="hola" />);
    const h1 = container.getElementsByTagName("h1")[0];
    expect(h1).toBeDefined();
    expect(h1.innerHTML).toBe("hola");
  });
});
