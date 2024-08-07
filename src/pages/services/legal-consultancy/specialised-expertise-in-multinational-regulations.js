import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function SpecialisedExpertiseInDiverseRegulations() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["legal-consultancy"][
              "specialised-expertise-in-multinational-regulations"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["legal-consultancy"][
              "specialised-expertise-in-multinational-regulations"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["legal-consultancy"][
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
