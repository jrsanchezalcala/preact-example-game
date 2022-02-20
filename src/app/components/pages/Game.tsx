import { createContext, h, JSX } from "preact";
import register from "preact-custom-element";
import { GameTemplateProps, GameTemplate } from "../templates/GameTemplate";
import "../templates/GameTemplate";
import  * as data from "../../../mocks/test-data.js";
import { Ref, useEffect,useRef, useState } from "preact/hooks";
import { Item } from "../molecules/Item";
import { Subject} from "rxjs"
declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-game-template"]: GameTemplateProps;
    }
  }
}

export interface GameProps {}
export interface DataContext {
  items ?: Item[],
  setItems ?: any

}
export class DataService {
  static onChange :  Subject<Item[]> = new Subject();
  static items : Item[] = [];
  static index : number = 0;
  static numItems : number = 10;
  static filterFunction : (item) => void;
  static orderFunction : (itemA,itemB) => number; 
  static setItems(items : Item[]){
    this.items = items;
    this.index = 0;
    DataService.onChange.next(items);
  }

  static async request (from,to) {
    let out = Object.keys(data.default).map((key) => {
      return data.default[key];
    })
    //return JSON.stringify(out);
    return out.sort(this.orderFunction).slice(from,to);  
    
  }

  static async getItems() : Promise<Item[]>{
    let items = await this.request(this.index,this.numItems);
    this.index++;
    return items;
  }

  static setFilter(filter : (item : Item) => void){
    this.filterFunction = filter;
    
  }

  static setOrder(order : (itemA : Item , itemB : Item) => number){
    this.orderFunction = order;
    
  }
}


export const Game = (): JSX.Element => {
  let template : Ref<any> = useRef<any>(null);
 
  return  <x-game-template ref={template} title={"LOTTOLAND GAMES"}  currency="EUR"/>

};
register(Game, "x-game");
