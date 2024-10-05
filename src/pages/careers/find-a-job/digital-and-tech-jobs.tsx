import Head from "next/head";

import { HtmlData } from "@data";

export default function DigitalAndTechJobs() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["find-a-job"]["digital-and-tech-jobs"].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["find-a-job"]["digital-and-tech-jobs"]
              .description
          }
        />
        <title>
          {HtmlData["careers"]["find-a-job"]["digital-and-tech-jobs"].title}
        </title>
      </Head>
      <main>
        <div>DigitalAndTechJobs</div>
      </main>
    </>
  );
}
