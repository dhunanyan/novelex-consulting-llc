import Head from "next/head";

import { HtmlData } from "@data";

export default function Coaching() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["personal-and-professional-development"][
              "coaching"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["personal-and-professional-development"][
              "coaching"
            ].keywords
          }
        />
        <title>
          {
            HtmlData["careers"]["personal-and-professional-development"][
              "coaching"
            ].careers
          }
        </title>
      </Head>
      <main>
        <div>Coaching</div>
      </main>
    </>
  );
}
