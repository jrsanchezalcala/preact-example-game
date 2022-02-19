import { FunctionalComponent, h, JSX } from "preact";
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

export interface GameTemplateProps {
  title: string;
  data?: any;
}

export const GameTemplate: FunctionalComponent<GameTemplateProps> = ({
  title
}): JSX.Element => {
  return (
    <div class="page">
      <div class="main">
        <x-top-section title={title} />
      </div>
    </div>
  );
};
register(GameTemplate, "x-game-template");
