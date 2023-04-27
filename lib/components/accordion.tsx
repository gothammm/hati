import {
  Accordion as ArkAccordion,
  AccordionTrigger as ArkAccordionTrigger,
  AccordionItem as ArkAccordionItem,
  AccordionContent as ArkAccordionContent,
  AccordionProps,
  AccordionContentProps,
  AccordionItemProps,
  AccordionTriggerProps,
} from "@ark-ui/solid";

export const Accordion = (props: AccordionProps) => (
  <ArkAccordion class="flex flex-1 flex-col justify-center p-3" {...props}>
    {props.children}
  </ArkAccordion>
);
export const AccordionTrigger = (props: AccordionTriggerProps) => (
  <ArkAccordionTrigger {...props}>
    <h3 class="flex">
      <button class="h-14 py-4 flex flex-1 font-medium transition-all hover:underline">{props.children}</button>
    </h3>
  </ArkAccordionTrigger>
);
export const AccordionItem = (props: AccordionItemProps) => (
  <ArkAccordionItem class="flex flex-col border-b" {...props}>
    {props.children}
  </ArkAccordionItem>
);
export const AccordionContent = (props: AccordionContentProps) => (
  <ArkAccordionContent class="pb-4 pt-0" {...props}>
    {props.children}
  </ArkAccordionContent>
);
