import Head from "next/head";

import { HtmlData } from "@data";

export default function GrowYourCareerByEmpoweringOthers() {
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
              "grow-your-career-by-empowering-others"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["become-a-trainer"][
              "grow-your-career-by-empowering-others"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["become-a-trainer"][
              "grow-your-career-by-empowering-others"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>GrowYourCareerByEmpoweringOthers</div>
      </main>
    </>
  );
}
