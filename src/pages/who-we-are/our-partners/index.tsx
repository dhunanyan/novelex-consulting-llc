import Head from "next/head";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

import { HtmlData, Content } from "@data";

const {
  index: { heroSection },
  "innovative-solutions": {
    iconCardsSection: iconCardsSectionInnovativeSolutions,
  },
  "mutual-growth-endeavors": {
    iconCardsSection: iconCardsSectionMutualGrowthEndeavors,
  },
  "shared-vision-and-values": {
    iconCardsSection: iconCardsSectionSharedVisionAndValues,
  },
  "strategic-collaborations": {
    iconCardsSection: iconCardsSectionStrategicCollaborations,
  },
} = Content["who-we-are"]["our-partners"];

export default function OurPartners() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["who-we-are"]["our-partners"]["index"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["who-we-are"]["our-partners"]["index"].description}
        />
        <title>{HtmlData["who-we-are"]["our-partners"]["index"].title}</title>
      </Head>
      <main>
        <HeroSection {...heroSection} />
        <IconCardsSection
          {...iconCardsSectionInnovativeSolutions}
          inverseColors={true}
        />
        <IconCardsSection
          {...iconCardsSectionMutualGrowthEndeavors}
          order={2}
        />
        <IconCardsSection
          {...iconCardsSectionSharedVisionAndValues}
          inverseColors={true}
        />
        <IconCardsSection
          {...iconCardsSectionStrategicCollaborations}
          order={2}
        />
      </main>
    </>
  );
}
