import { JSX } from "solid-js";

import "./component-preview.css";

interface ComponentPreviewProps {
  component: () => JSX.Element;
  children: JSX.Element;
  language?: "ts" | "sh";
}

export const ComponentPreview = (props: ComponentPreviewProps) => {
  return (
    <div class="flex flex-col border rounded-lg border-secondary preview-container">
      <div class="flex flex-col justify-center items-center bg-white rounded-t-lg dark:bg-slate-700 py-12">
        {props.component()}
      </div>
      <div class="code-container">{props.children}</div>
    </div>
  );
};
