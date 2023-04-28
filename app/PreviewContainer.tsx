import { JSX } from "solid-js";

export const PreviewContainer = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      class="flex flex-col rounded-lg border shadow-sm p-8 max-sm:col-span-1 max-md:col-auto"
    >
      {props.children}
    </div>
  );
};
