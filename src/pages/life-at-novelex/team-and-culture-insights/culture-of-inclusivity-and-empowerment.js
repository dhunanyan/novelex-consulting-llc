import Head from "next/head";

import { HtmlData } from "@data";

export default function CultureOfInclusivityAndEmpowerment() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["team-and-culture-insights"][
              "culture-of-inclusivity-and-empowerment"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["team-and-culture-insights"][
              "culture-of-inclusivity-and-empowerment"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["team-and-culture-insights"][
              "culture-of-inclusivity-and-empowerment"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>CultureOfInclusivityAndEmpowerment</div>
      </main>
    </>
  );
}
