import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ForgeConnectionsInASupportiveWorkCommunity() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["join-our-team"][
              "forge-connections-in-a-supportive-work-community"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["join-our-team"][
              "forge-connections-in-a-supportive-work-community"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["join-our-team"][
              "forge-connections-in-a-supportive-work-community"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ForgeConnectionsInASupportiveWorkCommunity</div>
      </main>
    </>
  );
}
