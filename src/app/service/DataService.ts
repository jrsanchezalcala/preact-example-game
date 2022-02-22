import { Subject } from 'rxjs';
import * as data from '../../mocks/test-data.js';
import { Item } from '../../interfaces/Item';
import { ItemData } from '../../interfaces/ItemData.js';

const sortDataFunctions = {
  name_desc: (a: Item, b: Item) => {
    if (a.displayName < b.displayName) {
      return -1;
    }
    if (a.displayName > b.displayName) {
      return 1;
    }
    return 0;
  },
  stake_asc: (a: Item, b: Item) => {
    return a.currencyData.minimumStake - b.currencyData.minimumStake;
  },
  stake_desc: (a: Item, b: Item) => {
    return b.currencyData.minimumStake - a.currencyData.minimumStake;
  },
};

export class DataService {
  static onChange: Subject<Item[]> = new Subject();

  static items : ItemData[] = null;

  static index = 0;

  static numItems = 20;

  static currency: string;

  static filterFunction: (item) => void = () => true;

  static orderFunction: (itemA, itemB) => number = sortDataFunctions.name_desc;


  static async request(from, to) : Promise<Item[]> {
      // TODO - to replace with fetch data
    if (!this.items) {
      this.items = Object.keys(data.default).map((key) => {
        return data.default[key] as ItemData;
      });
    }
    // return JSON.stringify(out);
    return this.items
      .filter((item) => {
        return (
          item.currencyData[this.currency] &&
          item.currencyData[this.currency].minimumStake
        );
      })
      .map((item) => {
        const currencyData = { ...item.currencyData[this.currency] };
        currencyData.name = this.currency;
        currencyData.simbol = this.getSymbol(this.currency);
        return { ...item, currencyData } as Item;
      })
      .sort(this.orderFunction)
      .slice(from, to);
  }

  // TODO - need to build with all symbols
  static getSymbol(curency: string) : string {
    return '€';
  }

  static async getItems(): Promise<Item[]> {
    this.index = 0;
    return this.request(this.index, this.numItems);
  }

  static async getMore(): Promise<Item[]> {
    
    this.index++;
    console.log("llama more", this.index);

    let from = this.index*this.numItems;
    let to = from + this.numItems;
    if(this.items.length >= from) {
    const items = await this.request(from,to);
    console.log(items);
 
    return items;
    }
    return []
  }

  static async setFilter(filter: (item: Item) => void) : Promise<Item[]> {
    this.filterFunction = filter;
    const items = await this.request(this.index, this.numItems);
    DataService.onChange.next(items);
    return items;
  }

  static async setOrder(order: (itemA: Item, itemB: Item) => number | string) : Promise<Item[]> {
    if (typeof order === 'string') {
      this.orderFunction = sortDataFunctions[order] as (
        itemA: Item,
        itemB: Item
      ) => number;
    } else {
      this.orderFunction = order as (itemA: Item, itemB: Item) => number;
    }
    const items = await this.request(this.index, this.numItems);
    DataService.onChange.next(items);
    return items;
  }

  static setCurrency(currency : string) :void {
    this.currency = currency;
  }
}
