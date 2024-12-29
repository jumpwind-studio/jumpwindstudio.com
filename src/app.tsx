import { Footer } from "@/components/core/footer";
import { Header } from "@/components/core/header";
import { Nav } from "@/components/core/nav";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Suspense>
            <Header>
              <Nav />
            </Header>
            <div class="h-[calc(100svh-var(--header-height))]">
              {props.children}
              <Footer />
            </div>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
