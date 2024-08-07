import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function IndustrySpecificLanguageSolutions() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["multilingual-solutions"][
              "industry-specific-language-solutions"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["multilingual-solutions"][
              "industry-specific-language-solutions"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["multilingual-solutions"][
              "industry-specific-language-solutions"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>IndustrySpecificLanguageSolutions</div>
      </main>
    </>
  );
}
