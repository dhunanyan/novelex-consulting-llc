import Head from "next/head";
import { HtmlData } from "@data";

export default function Careers() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content={HtmlData["careers"]["index"].keywords} />
        <meta
          name="description"
          content={HtmlData["careers"]["index"].description}
        />
        <title>{HtmlData["careers"]["index"].title}</title>
      </Head>
    </>
  );
}
