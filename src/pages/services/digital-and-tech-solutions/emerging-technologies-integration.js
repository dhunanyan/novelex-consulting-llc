import Head from "next/head";

import { HtmlData } from "@data";

export default function EmergingTechnologiesIntegration() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["digital-and-tech-solutions"][
              "emerging-technologies-integration"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["digital-and-tech-solutions"][
              "emerging-technologies-integration"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["digital-and-tech-solutions"][
              "emerging-technologies-integration"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>EmergingTechnologiesIntegration</div>
      </main>
    </>
  );
}
