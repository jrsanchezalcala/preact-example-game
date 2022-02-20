import * as data from "../../mocks/test-data.js";
import { Subject } from "rxjs";
import { Item } from "../components/molecules/Item.js";



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
    }
  };

export class DataService {
   
  static mappedData = null;
  static onChange: Subject<Item[]> = new Subject();
  static items: Item[] = [];
  static index: number = 0;
  static numItems: number = 20;
  static currency : string;
  static filterFunction: (item) => void = (item) => true;
  static orderFunction: (itemA, itemB) => number = sortDataFunctions.name_desc;
  static setItems(items: Item[]) {
    this.items = items;
    this.index = 0;
    DataService.onChange.next(items);
  }

  static async request(from, to) {
    if(!this.mappedData)
    this.mappedData = Object.keys(data.default).map((key) => {
        return data.default[key];
      });
    //return JSON.stringify(out);
    return this.mappedData.filter(item =>{
        return item.currencyData[this.currency] && item.currencyData[this.currency].minimumStake;
    }).map((item) => {
        let currencyData =  {...item.currencyData[this.currency]} ;
        currencyData.name = this.currency;
        currencyData.simbol = this.getSymbol(this.currency);
        return {...item , currencyData };
      }).sort(this.orderFunction).slice(from, to);
  }

  //TODO - need to build with all symbols
  static getSymbol(curency : string){
      return "€";
  }

  static async getItems(): Promise<Item[]> {
    this.index = 0;
    let items = await this.request(this.index, this.numItems);
    return items;
  }

  static async getMore(): Promise<Item[]> {
    let items = await this.request(this.index, this.numItems);
    this.index++;
    return items;
  }

  static async setFilter(filter: (item: Item) => void) {
    this.filterFunction = filter;
    let items = await this.request(this.index, this.numItems);
    DataService.onChange.next(items);
  }

  static async setOrder(order: (itemA: Item, itemB: Item) => number | string) {
      if(typeof order == "string"){
        this.orderFunction = sortDataFunctions[order] as (itemA: Item, itemB: Item) => number;
      }
      else{
        this.orderFunction = order as (itemA: Item, itemB: Item) => number;
      }
    let items = await this.request(this.index, this.numItems);
    DataService.onChange.next(items);
  }

  static setCurrency(currency){
      this.currency = currency;
  }

}

