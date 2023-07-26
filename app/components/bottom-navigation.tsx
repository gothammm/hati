import { ArrowLeft, ArrowRight } from "lucide-solid";
import { Show } from "solid-js";

interface NavigationInfo {
  path: string;
  text: string;
}

export const BottomNavigation = (props: {
  previous: NavigationInfo;
  next: NavigationInfo;
}) => {
  return (
    <Show when={props.next != null || props.previous != null} fallback={<></>}>
      <div class="flex justify-between mt-8">
        <Show when={props.previous != null}>
          <dl class="flex flex-1 flex-col items-start gap-3 px-3 py-2 min-w-fit">
            <dt class="text-sm font-medium self-start">Previous</dt>
            <dt class="flex flex-row items-center gap-3 font-medium">
              <a href={props.previous.path}>
                <ArrowLeft /> {props.previous.text}
              </a>
            </dt>
          </dl>
        </Show>
        <Show when={props.next != null}>
          <dl class="flex flex-1 flex-col items-end gap-3 px-3 py-2 min-w-fit">
            <dt class="text-sm font-medium self-end">Next</dt>
            <dt>
              <a
                href={props.next.path}
                class="flex flex-row items-center gap-3 font-medium"
                link
              >
                {props.next.text} <ArrowRight />
              </a>
            </dt>
          </dl>
        </Show>
      </div>
    </Show>
  );
};
