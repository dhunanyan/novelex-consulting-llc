import Head from "next/head";

import { HtmlData } from "@data";

export default function JoinOurTeam() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["careers"]["join-our-team"]["index"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["careers"]["join-our-team"]["index"].description}
        />
        <title>{HtmlData["careers"]["join-our-team"]["index"].title}</title>
      </Head>
      <main>
        <div>Join Our Team</div>
      </main>
    </>
  );
}
