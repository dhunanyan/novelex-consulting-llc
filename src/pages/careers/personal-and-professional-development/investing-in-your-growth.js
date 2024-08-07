import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function InvestingInYourGrowth() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["personal-and-professional-development"][
              "investing-in-your-growth"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["personal-and-professional-development"][
              "investing-in-your-growth"
            ].keywords
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["personal-and-professional-development"][
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
