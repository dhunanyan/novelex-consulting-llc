import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function TalentManagement() {
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
              "talent-management"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["personal-and-professional-development"][
              "talent-management"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["personal-and-professional-development"][
              "talent-management"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>TalentManagement</div>
      </main>
    </>
  );
}
