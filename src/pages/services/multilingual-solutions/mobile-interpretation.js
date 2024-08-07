import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function MobileInterpretation() {
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
              "mobile-interpretation"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["multilingual-solutions"][
              "mobile-interpretation"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["multilingual-solutions"][
              "mobile-interpretation"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>MobileInterpretation</div>
      </main>
    </>
  );
}
