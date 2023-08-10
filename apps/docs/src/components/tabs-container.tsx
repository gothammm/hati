import { TabContent, TabList, TabTrigger, Tabs } from "@gothammm/hati";
import { For, JSX, createSignal } from "solid-js";

import "./tabs-container.css";

export const TabsContainer = (props: {
  initialTab: string;
  tabs: Array<{
    header: string;
    content: JSX.Element | string;
  }>;
}) => {
  const [currentTab, setCurrentTab] = createSignal<string | null>(
    props.initialTab,
  );
  return (
    <div class="flex-1">
      <Tabs
        value={currentTab()}
        onChange={(details) => setCurrentTab(details.value)}
      >
        <TabList>
          <For each={props.tabs}>
            {(tab) => {
              return (
                <TabTrigger value={tab.header}>
                  <button>{tab.header}</button>
                </TabTrigger>
              );
            }}
          </For>
        </TabList>
        <For each={props.tabs}>
          {(tab) => {
            return (
              <TabContent value={tab.header}>
                <pre class="language-sh">
                  <code>{tab.content}</code>
                </pre>
              </TabContent>
            );
          }}
        </For>
      </Tabs>
    </div>
  );
};
