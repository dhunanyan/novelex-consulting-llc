import Head from "next/head";

import { HtmlData } from "@data";

export default function InvestingInYourGrowth() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["personal-and-professional-development"][
              "investing-in-your-growth"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["personal-and-professional-development"][
              "investing-in-your-growth"
            ].keywords
          }
        />
        <title>
          {
            HtmlData["careers"]["personal-and-professional-development"][
              "investing-in-your-growth"
            ].keywords
          }
        </title>
      </Head>
      <main>
        <div>InvestingInYourGrowth</div>
      </main>
    </>
  );
}
