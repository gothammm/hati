import { Component, Match, Switch, createSignal } from "solid-js";
import { Button } from "components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "components/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/accordion";

import {
  AlertCircle,
  AlertTriangle,
  Loader2,
  Mail,
  Moon,
  Save,
  Sun,
  Terminal,
} from "lucide-solid";
import { Alert, AlertDescription, AlertTitle } from "components/alert";
import { Avatar, AvatarFallback, AvatarImage } from "components/avatar";
import { PreviewContainer } from "./components/PreviewContainer";
import { applyTheme } from "../lib/util";
import { Badge } from "components/badge";
import { TabsPreview } from "./components/TabsPreview";

const App: Component = () => {
  const [theme, setTheme] = createSignal<"dark" | "light">("light");
  return (
    <main class="flex flex-col items-center justify-center space-y-10 bg-white py-10 dark:bg-background dark:text-primary">
      <header class="max-sm:px-10">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-semibold">Hati</h1>
            <h2 class="font-light">A UI Component Library for Solid.js</h2>
          </div>
          <div>
            <Button
              aria-label="Change theme"
              class="h-12 w-12"
              onClick={() => {
                const updatedTheme = theme() === "dark" ? "light" : "dark";
                applyTheme(updatedTheme);
                setTheme(updatedTheme);
              }}
            >
              <Switch fallback={<span>Not Found</span>}>
                <Match when={theme() === "dark"}>
                  <Sun />
                </Match>
                <Match when={theme() === "light"}>
                  <Moon />
                </Match>
              </Switch>
            </Button>
          </div>
        </div>
        <div class="mt-5 flex">
          <a
            class="underline underline-offset-4"
            href="https://github.com/gothammm/hati"
          >
            GitHub
          </a>
        </div>

        <div class="mt-5 inline-flex space-x-2 text-red-600">
          <AlertTriangle class="max-sm:h-14 max-sm:w-14" />
          <span class="font-extralight">
            This is not production ready, is in very early stage, this page is
            intended only for preview at the moment.
          </span>
        </div>
      </header>
      <section class="grid grid-cols-3 gap-11 px-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        <PreviewContainer id="button">
          <h2 class="mb-5 text-xl font-medium">Buttons</h2>
          <div class="grid grid-cols-2 gap-5">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button
              variant="primary"
              classList={{
                ["col-span-2"]: true,
              }}
            >
              <Mail class="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
              <Loader2 class="mr-2 h-4 w-4 animate-spin" /> Loading
            </Button>
            <Button aria-label="Save Button" class="h-12 w-12">
              <Save class="h-6 w-6" />
            </Button>
          </div>
        </PreviewContainer>

        <PreviewContainer
          id="card"
          classList={{
            "col-span-2": true,
          }}
        >
          <h2 class="mb-5 text-xl font-medium">Card</h2>
          <div class="flex w-full flex-row space-x-4">
            <Card classList={{ ["flex-1"]: true }}>
              <CardHeader>
                <CardTitle>Create a new issue</CardTitle>
                <CardSubtitle>You can create a new issue here.</CardSubtitle>
              </CardHeader>
              <CardContent>Hello there.</CardContent>
              <CardFooter>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
        </PreviewContainer>
        <PreviewContainer
          id="alert"
          classList={{
            "col-span-2": true,
          }}
        >
          <h2 class="mb-5 text-xl font-medium">Alert</h2>
          <div class="mb-5 flex flex-col">
            <h3 class="mb-3 text-base font-normal">Default</h3>
            <Alert>
              <Terminal class="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
          <div class="flex flex-col">
            <h3 class="mb-2 text-base font-normal">Error</h3>
            <Alert variant="error">
              <AlertCircle class="h-4 w-4" />
              <AlertTitle>Whoops!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
        </PreviewContainer>
        <PreviewContainer
          id="avatar"
          classList={{
            "col-span-1": true,
          }}
        >
          <h2 class="mb-2 text-xl font-medium">Avatar</h2>
          <div class="flex w-full flex-1 flex-row items-center justify-center space-x-4 max-sm:py-10">
            <Avatar>
              <AvatarImage
                src="https://github.com/gothammm.png"
                alt="@shadcn"
              />
              <AvatarFallback>GM</AvatarFallback>
            </Avatar>
          </div>
        </PreviewContainer>
        <PreviewContainer
          id="accordion"
          classList={{
            "col-span-3": true,
          }}
        >
          <h2 class="mb-2 text-xl font-medium">Badge</h2>
          <div class="mt-5 flex w-full flex-wrap space-x-4 max-sm:space-x-0 max-sm:space-y-5">
            <div class="flex space-x-4">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
            <div class="flex space-x-4">
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </PreviewContainer>
        <PreviewContainer
          id="accordion"
          classList={{
            "col-span-3": true,
          }}
        >
          <h2 class="mb-2 text-xl font-medium">Accordion</h2>
          <div class="flex w-full flex-row space-x-4">
            <Accordion collapsible>
              <AccordionItem value="panel-1">
                <AccordionTrigger>Panel 1 trigger</AccordionTrigger>
                <AccordionContent>Panel 1 content</AccordionContent>
              </AccordionItem>

              <AccordionItem value="panel-2">
                <AccordionTrigger>Panel 2 trigger</AccordionTrigger>
                <AccordionContent>Panel 2 content</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </PreviewContainer>
        <TabsPreview />
      </section>
    </main>
  );
};

export default App;
