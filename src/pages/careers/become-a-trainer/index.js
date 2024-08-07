import Head from "next/head";
import { PAGES_HTML } from "@/data";

export default function BecomeATrainer() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={PAGES_HTML["careers"]["become-a-trainer"].keywords}
        />
        <meta
          name="description"
          content={PAGES_HTML["careers"]["become-a-trainer"].content}
        />
        <title>{PAGES_HTML["careers"]["become-a-trainer"].title}</title>
      </Head>
      <main>
        <div>Become a Trainer</div>
      </main>
    </>
  );
}
