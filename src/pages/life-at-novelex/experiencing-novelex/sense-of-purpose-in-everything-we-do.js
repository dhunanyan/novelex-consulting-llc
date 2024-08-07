import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function SenseOfPurposeInEverythingWeDo() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
              "sense-of-purpose-in-everything-we-do"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
              "sense-of-purpose-in-everything-we-do"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
              "sense-of-purpose-in-everything-we-do"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Sense of Purpose in Everything We Do</div>
      </main>
    </>
  );
}
