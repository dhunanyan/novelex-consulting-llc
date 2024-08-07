import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function GlobalCollaborationCenter() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["where-we-hire"][
              "global-collaboration-center"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["where-we-hire"][
              "global-collaboration-center"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["where-we-hire"][
              "global-collaboration-center"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>GlobalCollaborationCenter</div>
      </main>
    </>
  );
}
