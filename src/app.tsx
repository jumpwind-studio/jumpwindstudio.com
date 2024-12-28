import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { Footer } from "@/components/core/footer";
import { Header } from "@/components/core/header";
import { Nav } from "@/components/core/nav";

import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Header>
            <Nav />
          </Header>
          <Suspense>{props.children}</Suspense>
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
