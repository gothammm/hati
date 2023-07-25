
import { Component, Match, Switch, createSignal } from "solid-js";
import { Button } from "@gothammm/hati";
import { applyTheme } from "../../lib/util";
import { Moon, Sun } from "lucide-solid";
import "./header.css";


export const Header: Component = () => {
  const [theme, setTheme] = createSignal<"dark" | "light">("light");
  return (
    <header class="header">
      <a data-type="title" href="/">Hati</a>
      <nav>
        <a href="/docs">Documentation</a>
        <a href="https://github.com/gothammm/hati" target="_blank">
          GitHub
        </a>
      </nav>
      <div class="right-navbar">
        <Button
          variant="ghost"
          aria-label="Change theme"
          class="h-10 w-10"
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
    </header>
  );
};
