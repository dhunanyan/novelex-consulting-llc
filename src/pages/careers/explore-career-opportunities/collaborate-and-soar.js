import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function CollaborateAndSoar() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["explore-career-opportunities"][
              "collaborate-and-soar"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["explore-career-opportunities"][
              "collaborate-and-soar"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["explore-career-opportunities"][
              "collaborate-and-soar"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>CollaborateAndSoar</div>
      </main>
    </>
  );
}
