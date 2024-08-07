import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function EcoFriendlyPractices() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["climate-strategy"][
              "eco-friendly-practices"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["climate-strategy"][
              "eco-friendly-practices"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["climate-strategy"][
              "eco-friendly-practices"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Eco-Friendly Practices</div>
      </main>
    </>
  );
}
