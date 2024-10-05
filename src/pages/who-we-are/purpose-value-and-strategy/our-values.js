import Head from "next/head";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

import { HtmlData, Content } from "@data";

const { heroSection, iconCardsSection } =
  Content["who-we-are"]["purpose-value-and-strategy"]["our-strategy"];

export default function OurStrategy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["purpose-value-and-strategy"]["our-values"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["purpose-value-and-strategy"]["our-values"]
              .description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["purpose-value-and-strategy"]["our-values"]
              .title
          }
        </title>
      </Head>
      <main>
        <HeroSection {...heroSection} />
        <IconCardsSection
          {...iconCardsSection}
          inverseColors={true}
          forceHideButton={true}
        />
      </main>
    </>
  );
}
