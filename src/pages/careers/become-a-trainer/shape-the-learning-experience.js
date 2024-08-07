import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ShapeTheLearningExperience() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["become-a-trainer"][
              "shape-the-learning-experience"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["become-a-trainer"][
              "shape-the-learning-experience"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["become-a-trainer"][
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
