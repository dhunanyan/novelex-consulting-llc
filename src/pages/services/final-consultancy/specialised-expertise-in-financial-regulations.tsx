import Head from "next/head";

import { HtmlData } from "@data";

export default function SpecialisedExpertiseInFinancialRegulations() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["final-consultancy"][
              "specialised-expertise-in-financial-regulations"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["final-consultancy"][
              "specialised-expertise-in-financial-regulations"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["final-consultancy"][
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
