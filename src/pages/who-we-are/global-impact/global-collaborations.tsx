import Head from "next/head";

import { HtmlData } from "@data";

export default function GlobalCollaborations() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["global-impact"]["global-collaborations"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["global-impact"]["global-collaborations"]
              .description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["global-impact"]["global-collaborations"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Global Collaborations</div>
      </main>
    </>
  );
}
