import { JSX, children, createEffect, createSignal } from "solid-js";
import "./avatar.css";

interface AvatarProps extends JSX.HTMLAttributes<HTMLSpanElement> {}
interface AvatarImageProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {}
interface AvatarFallbackProps extends JSX.HTMLAttributes<HTMLSpanElement> {}

export const Avatar = (props: AvatarProps) => {
  const resolved = children(() => props.children);
  const [showFallback, setShowFallback] = createSignal(false);

  createEffect(() => {
    const list = resolved.toArray() as HTMLElement[];
    for (const child of list) {
      if (child.nodeName === "IMG") {
        child.addEventListener("onerror", () => {
          setShowFallback(true);
        });
        if (showFallback()) {
          child.parentElement.removeChild(child);
        }
      }
      if (child.nodeName === "SPAN") {
        if (showFallback()) {
          child.classList?.remove("hide");
        } else {
          child.classList?.add("hide");
        }
      }
    }
  });
  return (
    <span {...props} class="avatar">
      {resolved()}
    </span>
  );
};

export const AvatarImage = (props: AvatarImageProps) => {
  return <img {...props} class="avatar-image" />;
};

export const AvatarFallback = (props: AvatarFallbackProps) => {
  return (
    <span class="avatar-fallback" {...props}>
      {props.children}
    </span>
  );
};
