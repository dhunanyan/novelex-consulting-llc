import Head from "next/head";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

import { HtmlData, Content } from "@data";

const {
  heroSection,
  "our-values": { iconCardsSection: iconCardsSectionValues },
  "our-purpose": { iconCardsSection: iconCardsSectionPurpose },
  "our-strategy": { iconCardsSection: iconCardsSectionStrategy },
} = Content["who-we-are"]["purpose-value-and-strategy"]["index"];

export default function PurposeValueAndStrategy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["purpose-value-and-strategy"]["index"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["purpose-value-and-strategy"]["index"]
              .description
          }
        />
        <title>
          {HtmlData["who-we-are"]["purpose-value-and-strategy"]["index"].title}
        </title>
      </Head>
      <main>
        <HeroSection {...heroSection} />
        <IconCardsSection {...iconCardsSectionPurpose} inverseColors={true} />
        <IconCardsSection {...iconCardsSectionValues} order={2} />
        <IconCardsSection {...iconCardsSectionStrategy} inverseColors={true} />
      </main>
    </>
  );
}
