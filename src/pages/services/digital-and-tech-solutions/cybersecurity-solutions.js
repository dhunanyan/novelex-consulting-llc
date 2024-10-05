import Head from "next/head";

import { HtmlData } from "@data";

export default function CybersecuritySolutions() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["digital-and-tech-solutions"][
              "cybersecurity-solutions"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["digital-and-tech-solutions"][
              "cybersecurity-solutions"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["digital-and-tech-solutions"][
              "cybersecurity-solutions"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>CybersecuritySolutions</div>
      </main>
    </>
  );
}
