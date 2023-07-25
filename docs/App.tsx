import { Routes, Route, Outlet } from "@solidjs/router";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Sidebar } from "./components/sidebar";
import Introduction from "./pages/docs/introduction.mdx";
import GettingStarted from "./pages/docs/getting-started.mdx";
import { MDXWrapper } from "./components/mdx-wrapper";
import "./base.css";

export default function App() {
  return (
    <>
      <Header />
      <main class="flex flex-1">
        <Routes>
          <Route
            path="docs"
            component={() => (
              <>
                <Sidebar />
                <MDXWrapper>
                  <Outlet />
                </MDXWrapper>
              </>
            )}
          >
            <Route path="/" component={() => <Introduction />} />
            <Route
              path="/getting-started"
              component={() => <GettingStarted />}
            />
          </Route>
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
