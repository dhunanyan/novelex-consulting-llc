import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function EnergyAndEnthusiasmDorSuccess() {
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
              "energy-and-enthusiasm-for-success"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
              "energy-and-enthusiasm-for-success"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
              "energy-and-enthusiasm-for-success"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Energy and Enthusiasm for Success</div>
      </main>
    </>
  );
}
