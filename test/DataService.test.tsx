import { h } from "preact";
import { render, fireEvent, screen } from "@testing-library/preact";

import "../src/app/componentsImports";
import { DataService } from "../src/app/service/DataService";
import { ItemData } from "../src/interfaces/ItemData";
import { Item } from "../src/interfaces/Item";
const items: ItemData[] = [
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
describe("DataService", () => {
  var service: DataService;
  beforeEach(() => {
    DataService.items = JSON.parse(JSON.stringify(items));
    DataService.setCurrency("EUR");
  });
  test("should retrieve data", async () => {
    let data: Item[] = await DataService.getItems();
    expect(data.length).toBe(2);
  });

  test("should order data by name as default", async () => {
    let data: Item[] = await DataService.getItems();
    expect(data[0].displayName < data[1].displayName).toBe(true);
  });
  test("should order data minimumStake asc", async () => {
    let items;
    DataService.onChange.subscribe((items_sub) => {
      items = items_sub;
      expect(DataService.items).toStrictEqual(items_sub);
    });
    DataService.setOrder("stake_asc");
    let data: Item[] = await DataService.getItems();
    expect(data).toStrictEqual(items);
    expect(
      data[0].currencyData.minimumStake < data[1].currencyData.minimumStake
    );
  });
  test("should order data minimumStake desc", async () => {
    let items;
    DataService.onChange.subscribe((items_sub) => {
      items = items_sub;
      expect(DataService.items).toStrictEqual(items_sub);
    });
    DataService.setOrder("stake_desc");
    let data: Item[] = await DataService.getItems();
    expect(data).toStrictEqual(items);
    expect(
      data[0].currencyData.minimumStake > data[1].currencyData.minimumStake
    );
  });
});

function DeepClone(ob) {}
