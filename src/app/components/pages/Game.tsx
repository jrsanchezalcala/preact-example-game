import { h, JSX } from "preact";
import register from "preact-custom-element";
import "../templates/GameTemplate";
import { Ref, useRef } from "preact/hooks";
import { Item } from "../../../interfaces/Item";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-game"]: GameProps;
    }
  }
}

export interface GameProps {}
export interface DataContext {
  items?: Item[];
  setItems?: any;
}
export function Game(): JSX.Element {
  const template: Ref<any> = useRef<any>(null);

  return (
    <x-game-template ref={template} title="LOTTOLAND GAMES" currency="EUR" />
  );
}
register(Game, "x-game");
