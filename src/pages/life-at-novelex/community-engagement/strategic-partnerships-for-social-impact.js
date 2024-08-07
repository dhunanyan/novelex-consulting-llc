import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function StrategicPartnershipsForSocialImpact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["community-engagement"][
              "strategic-partnerships-for-social-impact"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["community-engagement"][
              "strategic-partnerships-for-social-impact"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["community-engagement"][
              "strategic-partnerships-for-social-impact"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>StrategicPartnershipsForSocialImpact</div>
      </main>
    </>
  );
}
