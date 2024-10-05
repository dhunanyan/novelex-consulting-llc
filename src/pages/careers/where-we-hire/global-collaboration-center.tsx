import Head from "next/head";

import { HtmlData } from "@data";

export default function GlobalCollaborationCenter() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["where-we-hire"]["global-collaboration-center"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["where-we-hire"]["global-collaboration-center"]
              .description
          }
        />
        <title>
          {
            HtmlData["careers"]["where-we-hire"]["global-collaboration-center"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>GlobalCollaborationCenter</div>
      </main>
    </>
  );
}
