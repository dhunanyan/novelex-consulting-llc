import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function Coaching() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["personal-and-professional-development"][
              "coaching"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["personal-and-professional-development"][
              "coaching"
            ].keywords
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["personal-and-professional-development"][
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
