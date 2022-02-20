import { render } from "@testing-library/preact";

import "../src/app/componentsImports";

import { Item } from "../src/app/components/molecules/Item";
import { DataService } from "../src/app/components/pages/Game";
describe("ItemSection", () => {
  test("should display title tag", () => {
    let items: Item[] = [
      {
        name: "LuckyWizard",
        displayName: "Lucky Wizard",
        playURL: "/games/luckywizard/play",
        image: "/cms/5bab9d950eb3580fac83392e/Icon_320and250_LuckyWizard.jpg",
        detailURL: "/games/luckywizard",
        currencyData: {
          EUR: {
            minimumStake: 0.1
          }
        },
        volatility: ["High"],
        provider: ["RedTiger"]
      },
      {
        name: "GreekGods",
        displayName: "Greek Gods",
        playURL: "/games/greekgods/play",
        image: "/cms/5de91d2a91253e002efe72f7/icon-320and250_GreekGods.jpg",
        detailURL: "/games/greekgods",
        currencyData: {
          EUR: {
            minimumStake: 0.25
          }
        },
        volatility: ["High"],
        provider: ["Pragmatic"]
      }
    ];
    DataService.setItems(items);
    const { container } = render(<x-items-section />);
    expect(container).toBeDefined();
    for (let item of items) {
      expect(container.textContent).toMatch(item.displayName);
      expect(container.textContent).toMatch(item.provider[0]);
      expect(container.textContent).toMatch(
        "" + item.currencyData.EUR.minimumStake
      );
    }
  });
});
