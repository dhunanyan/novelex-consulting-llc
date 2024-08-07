import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function DocumentTranslation() {
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
              "document-translation"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["multilingual-solutions"][
              "document-translation"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["multilingual-solutions"][
              "document-translation"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Document Translation</div>
      </main>
    </>
  );
}
