import { h, JSX } from "preact";
import register from "preact-custom-element";
import { TopSectionProps } from "../organisms/TopSection";
import "../organisms/TopSection";

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-top-section"]: TopSectionProps;
    }
  }
}

export interface GameProps {}

export const Game = (): JSX.Element => {
  return (
    <div>
      <x-top-section title={"LOTTOLAND GAMES"} /> ;
    </div>
  );
};
register(Game, "x-game");
