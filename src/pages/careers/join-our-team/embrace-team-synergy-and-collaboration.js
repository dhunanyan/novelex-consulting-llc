import Head from "next/head";

import { HtmlData } from "@data";

export default function EmbraceTeamSynergyAndCollaboration() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["join-our-team"][
              "embrace-team-synergy-and-collaboration"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["join-our-team"][
              "embrace-team-synergy-and-collaboration"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["join-our-team"][
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
