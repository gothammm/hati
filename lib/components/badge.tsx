import { JSX } from "solid-js";
import "./badge.css";

interface BadgeProps extends JSX.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "destructive" | "outline";
}

export const Badge = (props: BadgeProps) => {
  return (
    <div {...props} class={`badge badge-${props.variant ?? "primary"}`}>
      {props.children}
    </div>
  );
};
