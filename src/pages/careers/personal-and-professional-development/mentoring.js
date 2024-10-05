import Head from "next/head";

import { HtmlData } from "@data";

export default function Mentoring() {
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
              "mentoring"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["personal-and-professional-development"][
              "mentoring"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["personal-and-professional-development"][
              "mentoring"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Mentoring</div>
      </main>
    </>
  );
}
