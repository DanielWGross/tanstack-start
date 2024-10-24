import { createRootRoute } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import appCss from "../styles/app.css?url";
import * as React from "react";

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "TanStack Start Starter",
    },
  ],
  links: () => [
    { rel: "stylesheet", href: appCss },
    {
      rel: "stylesheet",
      href: "https://rsms.me/inter/inter.css",
    },
  ],
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <div className="bg-slate-900 h-screen flex items-center gap-4">
          <div className="flex-grow">
            {children}
            <ScrollRestoration />
            <Scripts />
          </div>
        </div>
      </Body>
    </Html>
  );
}
