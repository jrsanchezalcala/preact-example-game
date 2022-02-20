import { Component, h, JSX, createContext, Fragment } from "preact";
//import { router } from "./router";
import "./componentsImports";

const Theme = createContext("dark");

export class App extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <x-game />
      </Fragment>
    );
  }
}
