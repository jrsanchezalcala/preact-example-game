import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import "../src/app/componentsImports";

describe("Title", () => {
  test("should display title tag", () => {
    const { container } = render(<x-title text={"hola"} />);
    let h1 = container.getElementsByTagName("h1")[0];
    expect(h1).toBeDefined();
    expect(h1.innerHTML).toBe("hola");
  });
});
