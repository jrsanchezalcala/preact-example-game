import { h, JSX } from "preact";
import register from "preact-custom-element";
import { GameTemplateProps } from "../templates/GameTemplate";
import "../templates/GameTemplate";
import data from "../../../mocks/test-data.js";
declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-game-template"]: GameTemplateProps;
    }
  }
}

export interface GameProps {}

export const Game = (): JSX.Element => {
  return <x-game-template title={"LOTTOLAND GAMES"} data={data} />;
};
register(Game, "x-game");
