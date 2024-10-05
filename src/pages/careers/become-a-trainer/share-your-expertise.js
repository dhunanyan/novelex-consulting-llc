import Head from "next/head";

import { HtmlData } from "@data";

export default function ShareYourExpertise() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["become-a-trainer"]["share-your-expertise"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["become-a-trainer"]["share-your-expertise"]
              .description
          }
        />
        <title>
          {
            HtmlData["careers"]["become-a-trainer"]["share-your-expertise"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>ShareYourExpertise</div>
      </main>
    </>
  );
}
