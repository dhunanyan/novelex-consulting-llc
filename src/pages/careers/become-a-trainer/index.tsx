import Head from "next/head";
import { HtmlData } from "@data";

export default function BecomeATrainer() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["careers"]["become-a-trainer"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["careers"]["become-a-trainer"].content}
        />
        <title>{HtmlData["careers"]["become-a-trainer"].title}</title>
      </Head>
      <main>
        <div>Become a Trainer</div>
      </main>
    </>
  );
}
