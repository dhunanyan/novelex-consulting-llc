import Head from "next/head";
import { HtmlData } from "@data";

export default function Services() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["services"]["index"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["services"]["index"].description}
        />
        <title>{HtmlData["services"]["index"].title}</title>
      </Head>
    </>
  );
}
