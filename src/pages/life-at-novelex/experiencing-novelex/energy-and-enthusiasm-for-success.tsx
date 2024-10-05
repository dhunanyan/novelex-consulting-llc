import Head from "next/head";

import { HtmlData } from "@data";

export default function EnergyAndEnthusiasmDorSuccess() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["experiencing-novelex"][
              "energy-and-enthusiasm-for-success"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["experiencing-novelex"][
              "energy-and-enthusiasm-for-success"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["experiencing-novelex"][
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
