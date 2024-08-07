import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function EnvironmentalResponsibility() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["global-impact"][
              "environmental-responsibility"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["global-impact"][
              "environmental-responsibility"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["global-impact"][
              "environmental-responsibility"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Environmental Responsibility</div>
      </main>
    </>
  );
}
