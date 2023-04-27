import { JSX } from "solid-js";
import "./alert.css";

interface AlertProps extends JSX.HTMLAttributes<HTMLDivElement> {}
interface AlertTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {}
interface AlertDescriptionProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const Alert = (props: AlertProps) => {
  return (
    <div {...props} class="alert">
      {props.children}
    </div>
  );
};

export const AlertTitle = (props: AlertTitleProps) => {
  return (
    <div {...props} class="alert-title">
      {props.children}
    </div>
  );
};

export const AlertDescription = (props: AlertDescriptionProps) => {
  return (
    <div {...props} class="alert-description">
      {props.children}
    </div>
  );
};
