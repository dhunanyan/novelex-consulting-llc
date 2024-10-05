import Head from "next/head";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { BlankSection } from "@components/BlankSection/BlankSection";
import { TilesSection } from "@components/TilesSection/TilesSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

import { HtmlData, Content } from "@data";

const {
  heroSection,
  blankSectionPurpose,
  tilesSection,
  blankSectionDiversity,
  iconCardsSection,
} = Content["who-we-are"]["index"];

export default function WhoWeAre() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["who-we-are"]["index"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["who-we-are"]["index"].description}
        />
        <title>{HtmlData["who-we-are"]["index"].title}</title>
      </Head>
      <main>
        <HeroSection {...heroSection} />
        <BlankSection {...blankSectionPurpose} />
        <TilesSection {...tilesSection} />
        <BlankSection {...blankSectionDiversity} />
        <IconCardsSection {...iconCardsSection} />
      </main>
    </>
  );
}
