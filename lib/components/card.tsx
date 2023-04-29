import { JSX } from "solid-js";
import "./card.css";

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {}

interface CardTitleProps extends JSX.HTMLAttributes<HTMLHeadingElement> {}

interface CardSubtitleProps extends JSX.HTMLAttributes<HTMLParagraphElement> {}

interface CardHeaderProps extends JSX.HTMLAttributes<HTMLDivElement> {}

interface CardContentProps extends JSX.HTMLAttributes<HTMLDivElement> {}

interface CardFooterProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export const Card = (props: CardProps) => {
  return (
    <div {...props} class="card">
      {props.children}
    </div>
  );
};

export const CardTitle = (props: CardTitleProps) => {
  return (
    <h3 {...props} class="card-title">
      {props.children}
    </h3>
  );
};

export const CardSubtitle = (props: CardSubtitleProps) => {
  return (
    <p {...props} class="card-subtitle">
      {props.children}
    </p>
  );
};

export const CardHeader = (props: CardHeaderProps) => {
  return (
    <div {...props} class="card-header">
      {props.children}
    </div>
  );
};

export const CardContent = (props: CardContentProps) => {
  return (
    <div {...props} class="card-content">
      {props.children}
    </div>
  );
};

export const CardFooter = (props: CardFooterProps) => {
  return (
    <div {...props} class="card-footer">
      {props.children}
    </div>
  );
};
