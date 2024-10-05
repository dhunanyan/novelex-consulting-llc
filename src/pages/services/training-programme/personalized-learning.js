import Head from "next/head";

import { HtmlData } from "@data";

export default function PersonalizedLearning() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["training-programme"]["personalized-learning"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["training-programme"]["personalized-learning"]
              .description
          }
        />
        <title>
          {
            HtmlData["services"]["training-programme"]["personalized-learning"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>PersonalizedLearning</div>
      </main>
    </>
  );
}
