import Head from "next/head";

import { HtmlData } from "@data";

export default function SpecialisedExpertiseInDiverseRegulations() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["legal-consultancy"][
              "specialised-expertise-in-multinational-regulations"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["legal-consultancy"][
              "specialised-expertise-in-multinational-regulations"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["legal-consultancy"][
              "specialised-expertise-in-multinational-regulations"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>SpecialisedExpertiseInDiverseRegulations</div>
      </main>
    </>
  );
}
