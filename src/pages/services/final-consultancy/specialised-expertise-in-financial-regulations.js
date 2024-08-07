import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function SpecialisedExpertiseInFinancialRegulations() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["final-consultancy"][
              "specialised-expertise-in-financial-regulations"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["final-consultancy"][
              "specialised-expertise-in-financial-regulations"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["final-consultancy"][
              "specialised-expertise-in-financial-regulations"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>SpecialisedExpertiseInFinancialRegulations</div>
      </main>
    </>
  );
}
