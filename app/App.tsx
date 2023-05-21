import { Routes, Route } from "@solidjs/router";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import Hello from "./pages/hello.mdx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/button" component={Hello} />
        <Route path="/" component={Home} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
      </Routes>
    </>
  );
}
