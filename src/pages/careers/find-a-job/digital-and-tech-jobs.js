import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function DigitalAndTechJobs() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["find-a-job"]["digital-and-tech-jobs"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["find-a-job"]["digital-and-tech-jobs"]
              .description
          }
        />
        <title>
          {PAGES_HTML["careers"]["find-a-job"]["digital-and-tech-jobs"].title}
        </title>
      </Head>
      <main>
        <div>DigitalAndTechJobs</div>
      </main>
    </>
  );
}
