import Head from "next/head";

import { HtmlData } from "@data";

export default function DigitalAndTechSolutions() {
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
              "data-analytics-and-business-intelligence"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["digital-and-tech-solutions"][
              "data-analytics-and-business-intelligence"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["digital-and-tech-solutions"][
              "data-analytics-and-business-intelligence"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Digital and Tech Solutions</div>
      </main>
    </>
  );
}
