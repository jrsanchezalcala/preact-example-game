import { h } from "preact";

import { getByText, render, waitFor, screen } from "@testing-library/preact";

import "../src/app/componentsImports";

import { Item } from "../src/app/components/molecules/Item";
import { DataService } from "../src/app/service/DataService";
describe("ItemSection", () => {
  test("should display title tag", async () => {
    let items = [
      {
        name: "LuckyWizard",
        displayName: "Lucky Wizard",
        playURL: "/games/luckywizard/play",
        image: "/cms/5bab9d950eb3580fac83392e/Icon_320and250_LuckyWizard.jpg",
        detailURL: "/games/luckywizard",
        currencyData: {
          CHF: {
            noDesk: true,
            noMob: true
          },
          EUR: {
            minimumStake: 0.1
          },
          GBP: {
            minimumStake: 0.1
          },
          SEK: {
            minimumStake: 1
          },
          PLN: {},
          JPY: {},
          INR: {},
          NZD: {
            minimumStake: 0.1
          },
          CAD: {},
          HUF: {}
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
          CHF: {
            noDesk: true,
            noMob: true
          },
          EUR: {
            minimumStake: 0.25
          },
          GBP: {
            minimumStake: 0.25
          },
          SEK: {
            minimumStake: 2
          },
          PLN: {},
          JPY: {},
          INR: {},
          NZD: {
            minimumStake: 0.25
          },
          CAD: {},
          HUF: {}
        },
        volatility: ["High"],
        provider: ["Pragmatic"]
      }
    ];
    DataService.currency = "EUR";
    DataService.items = items;
    const { container } = render(<x-items-section />);
    expect(container).toBeDefined();

    for (let item of items) {
      await screen.findByText(item.displayName);
    }
  });
});
