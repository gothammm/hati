/* eslint-disable solid/reactivity */
import { JSX } from "solid-js";
import "./button.css";
import { omit } from "../util";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive" | "ghost";
}

export const Button = (props: ButtonProps) => {
  const propsToPass = omit(["variant", "class"], props);
  const classNames = ["btn", `btn-${props.variant ?? "primary"}`]
    .concat(props.class?.split(" ") ?? [])
    .join(" ");
  return (
    <button {...propsToPass} class={classNames}>
      {props.children}
    </button>
  );
};
