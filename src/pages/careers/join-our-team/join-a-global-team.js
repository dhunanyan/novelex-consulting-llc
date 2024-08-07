import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function JoinAGlobalTeam() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["join-our-team"]["join-a-global-team"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["join-our-team"]["join-a-global-team"]
              .description
          }
        />
        <title>
          {PAGES_HTML["careers"]["join-our-team"]["join-a-global-team"].title}
        </title>
      </Head>
      <main>
        <div>JoinAGlobalTeam</div>
      </main>
    </>
  );
}
