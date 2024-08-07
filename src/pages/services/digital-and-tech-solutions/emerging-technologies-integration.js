import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function EmergingTechnologiesIntegration() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["digital-and-tech-solutions"][
              "emerging-technologies-integration"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["digital-and-tech-solutions"][
              "emerging-technologies-integration"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["digital-and-tech-solutions"][
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
