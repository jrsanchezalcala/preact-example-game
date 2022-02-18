import { Component, h, JSX, createContext, Fragment } from "preact";
import { GameProps } from "./components/pages/Game";
//import { router } from "./router";
import "./components/pages/Game";

const Theme = createContext("dark");

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-game"]: GameProps;
    }
  }
}

export class App extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <x-game></x-game>
      </Fragment>
    );
  }
}
