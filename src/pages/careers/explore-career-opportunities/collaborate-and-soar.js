import Head from "next/head";

import { HtmlData } from "@data";

export default function CollaborateAndSoar() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["explore-career-opportunities"][
              "collaborate-and-soar"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["explore-career-opportunities"][
              "collaborate-and-soar"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["explore-career-opportunities"][
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
