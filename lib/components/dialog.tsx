import {
  Dialog as ArkDialog,
  DialogProps as ArkDialogProps,
  DialogBackdrop as ArkDialogBackdrop,
  DialogCloseTrigger as ArkDialogCloseTrigger,
  DialogContainer as ArkDialogContainer,
  DialogContent as ArkDialogContent,
  DialogContentProps as ArkDialogContentProps,
  DialogDescription as ArkDialogDescription,
  DialogDescriptionProps as ArkDialogDescriptionProps,
  DialogTitle as ArkDialogTitle,
  DialogTitleProps as ArkDialogTitleProps,
  DialogTrigger as ArkDialogTrigger,
  DialogTriggerProps as ArkDialogTriggerProps,
} from "@ark-ui/solid";
import { Portal } from "solid-js/web";

import "./dialog.css";

interface DialogTitleProps extends ArkDialogTitleProps {}
interface DialogDescriptionProps extends ArkDialogDescriptionProps {}
interface DialogContentProps extends ArkDialogContentProps {}
interface DialogTriggerProps extends ArkDialogTriggerProps {}
interface DialogProps extends ArkDialogProps {}
interface DialogHeaderProps extends ArkDialogContentProps {}

export const DialogTitle = (props: DialogTitleProps) => {
  return <ArkDialogTitle {...props}>{props.children}</ArkDialogTitle>;
};

export const DialogDescription = (props: DialogDescriptionProps) => {
  return (
    <ArkDialogDescription {...props}>{props.children}</ArkDialogDescription>
  );
};

export const DialogHeader = (props: DialogHeaderProps) => {
  return <div class="dialog-header">{props.children}</div>;
};

export const DialogContent = (props: DialogContentProps) => {
  return (
    <Portal>
      <ArkDialogBackdrop />
      <ArkDialogContainer>
        <ArkDialogContent>
          <ArkDialogCloseTrigger class="close-trigger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          </ArkDialogCloseTrigger>
          {props.children}
        </ArkDialogContent>
      </ArkDialogContainer>
    </Portal>
  );
};

export const DialogTrigger = (props: DialogTriggerProps) => {
  return <ArkDialogTrigger asChild>{props.children}</ArkDialogTrigger>;
};

export const Dialog = (props: DialogProps) => {
  return <ArkDialog {...props}>{props.children}</ArkDialog>;
};
