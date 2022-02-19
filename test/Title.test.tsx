import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import { TitleProps } from "../src/app/components/atoms/Title";
import "../src/app/components/atoms/Title";

describe("Title", () => {
  test("should display title tag", () => {
    const { container } = render(<x-title text={"hola"} />);
    let h1 = container.getElementsByTagName("h1")[0];
    console.log(h1);
    expect(h1).toBeDefined();
    expect(h1.innerHTML).toBe("hola");
  });
});
