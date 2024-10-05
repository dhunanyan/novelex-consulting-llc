import Head from "next/head";

import { HtmlData } from "@data";

export default function Interpretation() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["multilingual-solutions"]["interpretation"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["multilingual-solutions"]["interpretation"]
              .description
          }
        />
        <title>
          {
            HtmlData["services"]["multilingual-solutions"]["interpretation"]
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
