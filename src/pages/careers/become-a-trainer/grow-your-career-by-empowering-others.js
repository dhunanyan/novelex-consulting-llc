import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function GrowYourCareerByEmpoweringOthers() {
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
              "grow-your-career-by-empowering-others"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["become-a-trainer"][
              "grow-your-career-by-empowering-others"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["become-a-trainer"][
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
