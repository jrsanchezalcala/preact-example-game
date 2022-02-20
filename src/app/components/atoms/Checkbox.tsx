import { Fragment, Ref, FunctionComponent, h, JSX } from "preact";
import register from "preact-custom-element";
import { useRef } from "preact/hooks";
import { forwardRef } from "preact/compat";

export interface CheckboxProps {
  mark: boolean;
  value: string;
  onClick?: (e) => void;
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
  value
}): JSX.Element => {
  const ref = useRef(null);
  if (typeof mark == "string" && mark == "false") mark = false;

  return (
    <div ref={ref}>
      <span class="checkbox">{mark ? <span class="checked"></span> : ""}</span>
      <input
        type="checkbox"
        checked={mark}
        value={value}
        style="display:none"
      />
    </div>
  );
};
register(Checkbox, "x-checkbox", ["mark", "value", "onClick"]);
