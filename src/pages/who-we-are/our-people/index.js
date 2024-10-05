import Head from "next/head";
import { HeroSection } from "@components/HeroSection/HeroSection";

import { HtmlData } from "@data";
import { Content } from "@data";

const { heroSection } = Content["who-we-are"]["our-people"]["index"];

export default function OurPeople() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["who-we-are"]["our-people"]["index"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["who-we-are"]["our-people"]["index"].description}
        />
        <title>{HtmlData["who-we-are"]["our-people"]["index"].title}</title>
      </Head>
      <main>
        <div>
          <HeroSection {...heroSection} />
        </div>
      </main>
    </>
  );
}
