import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import "../src/app/componentsImports";

describe("Image", () => {
  test("should display image tag", () => {
    const { container } = render(<x-image src={"hola.jpg"} />);
    let img = container.getElementsByTagName("img")[0];
    expect(img).toBeDefined();
    expect(img.getAttribute("src")).toBe("hola.jpg");
  });
});
