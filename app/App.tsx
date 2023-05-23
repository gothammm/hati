import { Routes, Route } from "@solidjs/router";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import Hello from "./pages/hello.mdx";
import { MDXWrapper } from "./components/mdx-wrapper";
import { Sidebar } from "./components/sidebar";

export default function App() {
  return (
    <>
      <Header />
      <main class="flex">
        <Sidebar />
        <Routes>
          <Route
            path="/button"
            component={() => (
              <MDXWrapper>
                <Hello />
              </MDXWrapper>
            )}
          />
          <Route path="/" component={Home} />
          <Route
            path="/about"
            element={<div>This site was made with Solid</div>}
          />
        </Routes>
      </main>
    </>
  );
}
