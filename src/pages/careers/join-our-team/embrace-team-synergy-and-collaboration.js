import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function EmbraceTeamSynergyAndCollaboration() {
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
              "embrace-team-synergy-and-collaboration"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["join-our-team"][
              "embrace-team-synergy-and-collaboration"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["join-our-team"][
              "embrace-team-synergy-and-collaboration"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>EmbraceTeamSynergyAndCollaboration</div>
      </main>
    </>
  );
}
