import type { Component } from "solid-js";
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
  Github,
  Loader2,
  Mail,
  Save,
  Terminal,
} from "lucide-solid";
import { Alert, AlertDescription, AlertTitle } from "components/alert";
import { Avatar, AvatarFallback, AvatarImage } from "components/avatar";
import { PreviewContainer } from "./PreviewContainer";

const App: Component = () => {
  return (
    <main class="flex flex-col justify-center items-center space-y-10 py-10">
      <header class="max-sm:px-10">
        <h1 class="font-semibold text-4xl">Hati</h1>
        <h2 class="font-light">A UI Component Library for Solid.js</h2>
        <div class="flex mt-5">
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
      <section class="grid grid-cols-3 gap-11 px-6 max-sm:grid-cols-1 max-md:grid-cols-2">
        <PreviewContainer id="button">
          <h2 class="font-medium text-xl mb-5">Buttons</h2>
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
              <Mail class="h-4 w-4 mr-2" /> Login with Email
            </Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
              <Loader2 class="animate-spin mr-2 h-4 w-4" /> Loading
            </Button>
            <Button aria-label="Save Button" class="w-12 h-12">
              <Save class="h-6 w-6" />
            </Button>
          </div>
        </PreviewContainer>

        <PreviewContainer id="card" classList={{
          "col-span-2": true
        }}>
          <h2 class="font-medium text-xl mb-5">Card</h2>
          <div class="flex flex-row space-x-4 w-full">
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
        <PreviewContainer id="alert" classList={{
          "col-span-2": true
        }}>
          <h2 class="font-medium text-xl mb-5">Alert</h2>
          <div class="flex flex-col mb-5">
            <h3 class="font-normal text-base mb-3">Default</h3>
            <Alert>
              <Terminal class="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
          <div class="flex flex-col">
            <h3 class="font-normal text-base mb-2">Error</h3>
            <Alert variant="error">
              <AlertCircle class="h-4 w-4" />
              <AlertTitle>Whoops!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
        </PreviewContainer>
        <PreviewContainer id="avatar" classList={{
          "col-span-1": true
        }}>
          <h2 class="font-medium text-xl mb-2">Avatar</h2>
          <div class="flex flex-1 flex-row space-x-4 max-sm:py-10 w-full justify-center items-center">
            <Avatar>
              <AvatarImage
                src="https://github.com/gothammm.png"
                alt="@shadcn"
              />
              <AvatarFallback>GM</AvatarFallback>
            </Avatar>
          </div>
        </PreviewContainer>
        <PreviewContainer id="accordion" classList={{
          "col-span-3": true
        }}>
          <h2 class="font-medium text-xl mb-2">Accordion</h2>
          <div class="flex flex-row space-x-4 w-full">
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
      </section>
    </main>
  );
};

export default App;
