import Head from "next/head";

import { HtmlData } from "@data";

export default function IndustrySpecificLanguageSolutions() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["multilingual-solutions"][
              "industry-specific-language-solutions"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["multilingual-solutions"][
              "industry-specific-language-solutions"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["multilingual-solutions"][
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
