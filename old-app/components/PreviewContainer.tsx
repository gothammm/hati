import { JSX } from "solid-js";

export const PreviewContainer = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      class="flex flex-col rounded-lg border p-8 shadow-sm max-md:col-auto max-sm:col-span-1"
    >
      {props.children}
    </div>
  );
};
