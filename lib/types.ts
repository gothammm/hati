import { JSX } from "solid-js";

export interface BaseComponent<T = JSX.Element> {
  children: JSX.Element;
  classList?: {
    [k: string]: boolean | undefined;
  };
}
