import { Component, h, JSX, createContext, Fragment } from "preact";
import "./componentsImports";

export class App extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <x-game />
      </Fragment>
    );
  }
}
