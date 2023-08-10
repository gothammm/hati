## Hati

> A UI Component Library for Solid.js

A port of [shadcn/ui](https://github.com/shadcn/ui) to Solid.js

### ⚠ This is not ready for production!

This library is in very early stage, barely has any components ready for use, feel free to test run with the following setup.

### Getting Started

#### Installation

```bash
$ pnpm install --save @gothammm/hati # or npm install --save @gothammm/hati
```


#### Usage

```tsx
import type { Component } from "solid-js";
// Import styles
import "@gothammm/hati/styles.css";
import { Button } from "@gothammm/hati";

const MyComponent = (): Component => {
  return <Button variant="primary">Primary</Button>
};

```

### Contribute

This is a monorepo build with [turbo](https://turbo.build/repo/docs)

#### Install dependencies

```bash
$ pnpm install # or npm install or yarn install
```

#### To run the test app

```bash
$ turbo dev
```
