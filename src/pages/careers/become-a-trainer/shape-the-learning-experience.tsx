import Head from "next/head";

import { HtmlData } from "@data";

export default function ShapeTheLearningExperience() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["become-a-trainer"][
              "shape-the-learning-experience"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["become-a-trainer"][
              "shape-the-learning-experience"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["become-a-trainer"][
              "shape-the-learning-experience"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ShapeTheLearningExperience</div>
      </main>
    </>
  );
}
