import { Routes, Route, Outlet, Router } from "@solidjs/router";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Sidebar } from "./components/sidebar";
import Introduction from "./pages/docs/introduction.mdx";
import Installation from "./pages/docs/installation.mdx";
import { MDXWrapper } from "./components/mdx-wrapper";

export default function App() {
  return (
    <Router>
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
            <Route path="/installation" component={() => <Installation />} />
          </Route>
          <Route path="/" component={Home} />
          <Route
            path="/about"
            element={<div>This site was made with Solid</div>}
          />
        </Routes>
      </main>
    </Router>
  );
}
