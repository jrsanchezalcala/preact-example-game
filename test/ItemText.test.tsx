import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import { Item } from "../src/interfaces/Item";
import "../src/app/componentsImports";

describe("ItemText", () => {
  test("should display item-text data", () => {
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
      <x-item-text
        provider={item.provider[0]}
        title={item.displayName}
        price={String(item.currencyData.minimumStake)}
      />
    );
    expect(container).toBeDefined();
    expect(container.textContent).toMatch(item.provider[0]);
    expect(container.textContent).toMatch(item.displayName);
    expect(container.textContent).toMatch(
      String(item.currencyData.minimumStake)
    );
  });
});
