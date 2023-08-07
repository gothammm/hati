import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div
      data-section="sidebar"
      class="lg:relative block max-md:hidden lg:flex-none"
    >
      <div class="sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto py-6 pe-2 ps-2">
        <nav class="w-52 text-base lg:text-sm">
          <ul class="space-y-6">
            <li>
              <h2 class="ms-3 font-medium text-accent-foreground">
                Getting Started
              </h2>
              <ul class="mt-2 space-y-1 text-sm">
                <li class="group relative">
                  <a href="/docs" link>
                    Introduction
                  </a>
                </li>
                <li class="group relative">
                  <a href="/docs/installation" link>
                    Installation
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
