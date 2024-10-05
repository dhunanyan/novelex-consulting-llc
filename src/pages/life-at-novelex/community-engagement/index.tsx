import Head from "next/head";

import { HtmlData } from "@data";

export default function CommunityEngagement() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["community-engagement"]["index"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["community-engagement"]["index"]
              .description
          }
        />
        <title>
          {HtmlData["life-at-novelex"]["community-engagement"]["index"].title}
        </title>
      </Head>
      <main>
        <div>CommunityEngagement</div>
      </main>
    </>
  );
}
