import { Fragment, FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";
export interface CheckboxProps {
  mark: boolean;
  value: string;
  onClick: (e) => void;
}

declare global {
  namespace preact.createElement.JSX {
    interface IntrinsicElements {
      ["x-checkbox"]: CheckboxProps;
    }
  }
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  mark,
  value,
  onClick
}): JSX.Element => {
  const handleClick = (e) => {
    debugger;
    console.log("ENTRA");
    e.preventDefault();
    onClick(value);
  };
  return (
    <Fragment>
      <span onClick={handleClick} class="checkbox">
        {mark ? <span class="checked"></span> : ""}
      </span>
      <input
        type="checkbox"
        checked={mark}
        value={value}
        style="display:none"
      />
    </Fragment>
  );
};
register(Checkbox, "x-checkbox", ["mark", "value"]);
