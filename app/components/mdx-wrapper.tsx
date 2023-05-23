import { JSX } from "solid-js";
import "./mdx.css";

export const MDXWrapper = (props: JSX.HTMLAttributes<HTMLElement>) => {
  return (
    <div data-section="md-wrapper">
      <article>{props.children}</article>
    </div>
  );
};
