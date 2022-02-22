import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import { Item } from "../src/interfaces/Item";
import "../src/app/componentsImports";

describe("ItemImage", () => {
  test("should display itemimage data", () => {
    const item: Item = {
      name: "LuckyWizard",
      displayName: "Lucky Wizard",
      playURL: "/games/luckywizard/play",
      image: "/cms/5bab9d950eb3580fac83392e/Icon_320and250_LuckyWizard.jpg",
      detailURL: "/games/luckywizard",
      currencyData: { name: "EUR", minimumStake: 0.1 },
      volatility: ["High"],
      provider: ["RedTiger"]
    };

    const { container } = render(
      <x-item-image src={item.image} text={item.displayName} />
    );
    expect(container).toBeDefined();
    const img = container.getElementsByTagName("img")[1];
    expect(img).toBeDefined();
    expect(img.src).toMatch(item.image);
    expect(img.alt).toMatch(item.displayName);
  });
});
