import { TabContent, TabList, TabTrigger, Tabs } from "@gothammm/hati";
import { PreviewContainer } from "./PreviewContainer";
import { createSignal } from "solid-js";

export const TabsPreview = () => {
  const [currentTab, setCurrentTab] = createSignal<string | null>("react");
  return (
    <PreviewContainer
      id="tabs"
      classList={{
        "col-span-3": true,
      }}
    >
      <h2 class="mb-2 text-xl font-medium">Tabs</h2>
      <div class="mt-5 flex w-full flex-wrap items-center justify-center space-x-4 max-sm:space-x-0 max-sm:space-y-5">
        <Tabs
          value={currentTab()}
          onChange={(details) => setCurrentTab(details.value)}
        >
          <TabList>
            <TabTrigger value="react">
              <button>React</button>
            </TabTrigger>
            <TabTrigger value="solid">
              <button>Solid</button>
            </TabTrigger>
            <TabTrigger value="vue">
              <button>Vue</button>
            </TabTrigger>
          </TabList>
          <TabContent value="react">
            <div class="p-5 text-sm">
              A JavaScript library for building user interfaces
            </div>
          </TabContent>
          <TabContent value="solid">
            <div class="p-5 text-sm">
              Simple and performant reactivity for building user interfaces.
            </div>
          </TabContent>
          <TabContent value="vue">
            <div class="p-5 text-sm">
              An approachable, performant and versatile framework for building
              web user interfaces.
            </div>
          </TabContent>
        </Tabs>
      </div>
    </PreviewContainer>
  );
};
