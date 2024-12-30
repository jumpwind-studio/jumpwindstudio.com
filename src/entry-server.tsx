// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="scheme-light dark:scheme-dark">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body class="text-pretty antialiased">
          <div id="app" class="flex min-h-dvh flex-col">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
