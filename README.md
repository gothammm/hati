## Hati

> A UI Component Library for Solid.js

A port of [shadcn/ui](https://github.com/shadcn/ui) to Solid.js

![hati](./hati.png?raw=true)

### ⚠ This is not ready for production!

This library is in very early stage, barely has any components ready for use, feel free to test run with the following setup.

### Getting Started

#### Installation

```
npm install --save @gothammm/hati // or pnpm install --save @gothammm/hati
```


#### Usage

```tsx
import type { Component } from "solid-js";
import { Button } from "@gothammm/hati";

const MyComponent = (): Component => {
  return <Button variant="primary">Primary</Button>
};

```

### Contribute

#### Install dependencies

```bash
$ pnpm install # or npm install or yarn install
```

#### To run the test app

```bash
$ pnpm app:dev
```
