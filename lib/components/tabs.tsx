import {
  TabContent as ArkTabContent,
  TabList as ArkTabList,
  Tabs as ArkTabs,
  TabTrigger as ArkTabTrigger,
} from "@ark-ui/solid";

import type {
  TabContentProps,
  TabListProps,
  TabTriggerProps,
  TabsProps as ArkTabProps,
} from "@ark-ui/solid";

import "./tabs.css";
import { children, createEffect } from "solid-js";

interface TabsProps extends ArkTabProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (details: { value: string }) => void;
}

export const Tabs = (props: TabsProps) => {
  const TabChildRender = () => {
    const resolved = children(() => props.children);
    createEffect(() => {
      for (const ele of resolved.toArray() as HTMLElement[]) {
        if (ele.classList.contains("tablist")) {
          for (const childNode of ele.children) {
            if (childNode.getAttribute("data-value") === props.value) {
              childNode.setAttribute("data-state", "active");
            } else {
              childNode.removeAttribute("data-state");
            }
          }
          break;
        }
      }
    });
    return resolved();
  };

  return (
    <ArkTabs {...props} class="tabs">
      <TabChildRender />
    </ArkTabs>
  );
};
export const TabList = (props: TabListProps) => {
  return (
    <ArkTabList {...props} class="tablist">
      {props.children}
    </ArkTabList>
  );
};
export const TabContent = (props: TabContentProps) => {
  return (
    <ArkTabContent {...props} class="tabcontent">
      {props.children}
    </ArkTabContent>
  );
};
export const TabTrigger = (props: TabTriggerProps) => {
  return <ArkTabTrigger {...props}>{props.children}</ArkTabTrigger>;
};
