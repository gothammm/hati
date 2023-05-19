import { Component, Match, Switch, createSignal } from "solid-js";
import "./header.css";
import { Button } from "../../lib/components/button";
import { applyTheme } from "../../lib/util";
import { Moon, Sun } from "lucide-solid";
export const Header: Component = () => {
  const [theme, setTheme] = createSignal<"dark" | "light">("light");
  return (
    <header class="header">
      <h2>Hati</h2>
      <nav>
        <a href="#">Documentation</a>
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
