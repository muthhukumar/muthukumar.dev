import tailwindStylesheetUrl from "./styles/tailwind.css";

import type { LinksFunction, MetaFunction } from "@remix-run/node";

import * as React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import { socials } from "./socials";

import * as gtag from "~/utils/gtags";
import { GoogleAnalytics } from "./components";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "canonical", href: "https://muthukumar.dev" },

    /* Favicon */
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Muthukumar",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Frontend developer, blogger, and Remix lover, living in Tamil Nadu.",
  "twitter:card": "summary_large_image",
  "twitter:creator": `@${socials.twitter}`,
  "twitter:title": "Muthukumar",
  "twitter:description":
    "Frontend developer, blogger, and Remix lover, living in Tamil Nadu.",
  "twitter:image": "https://muthukumar.dev/images/og-default.jpg",
});

export default function App() {
  const location = useLocation();

  React.useEffect(() => {
    gtag.pageview(location.pathname);
  }, [location]);

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <meta httpEquiv="x-ua-compatible" content="Muthukumar"></meta>
        <meta property="og:site_name" content="muthukumar.dev"></meta>
        <meta property="og:title" content="Muthukumar"></meta>
        <meta
          property="og:description"
          content="Frontend developer, blogger, and Remix lover, living in Tamil Nadu."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content="https://muthukumar.dev/images/og-default.jpg"
        ></meta>
        <meta
          property="og:image:alt"
          content="Banner for muthukumar.dev, featuring a name."
        ></meta>
        <meta property="og:image:width" content="1280"></meta>
        <meta property="og:image:height" content="678"></meta>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        ></meta>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        ></meta>
        <Links />
      </head>
      <body className="h-full">
        <GoogleAnalytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
