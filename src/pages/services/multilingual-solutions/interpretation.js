import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function Interpretation() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["multilingual-solutions"]["interpretation"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["multilingual-solutions"]["interpretation"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["multilingual-solutions"]["interpretation"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Interpretation</div>
      </main>
    </>
  );
}
