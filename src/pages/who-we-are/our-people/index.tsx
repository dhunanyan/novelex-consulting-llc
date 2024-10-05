import Head from "next/head";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

import { HtmlData, Content } from "@data";

const {
  index: { heroSection },
  "collective-excellence": {
    iconCardsSection: iconCardsSectionCollectiveExcellence,
  },
  "culture-of-inclusivity": {
    iconCardsSection: iconCardsSectionCultureofInclusivity,
  },
  "professional-growth": {
    iconCardsSection: iconCardsSectionProfessionalGrowth,
  },
  "well-being": { iconCardsSection: iconCardsSectionWellBeing },
} = Content["who-we-are"]["our-people"];

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
          <IconCardsSection
            {...iconCardsSectionCollectiveExcellence}
            inverseColors={true}
          />
          <IconCardsSection
            {...iconCardsSectionCultureofInclusivity}
            order={2}
          />
          <IconCardsSection
            {...iconCardsSectionProfessionalGrowth}
            inverseColors={true}
          />
          <IconCardsSection {...iconCardsSectionWellBeing} order={2} />
        </div>
      </main>
    </>
  );
}
