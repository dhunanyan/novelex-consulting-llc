import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function PersonalizedLearning() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["training-programme"][
              "personalized-learning"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["training-programme"][
              "personalized-learning"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["training-programme"][
              "personalized-learning"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>PersonalizedLearning</div>
      </main>
    </>
  );
}
