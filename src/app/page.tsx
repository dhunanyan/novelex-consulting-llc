import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";
import { ImageCardsSection } from "@components/ImageCardsSection/ImageCardsSection";

import { PRIMARY_BLACK_COLOR } from "@utils/styles";

import { Content } from "@data";
import { SummarySection } from "@components/SummarySection/SummarySection";

const {
  heroSection,
  aboutSection,
  iconCardsSectionCareers,
  imageCardsSection,
  iconCardsSectionServices,
} = Content["index"];

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroSection} isInverted={true} />
      <SummarySection {...aboutSection} />
      <IconCardsSection {...iconCardsSectionCareers} />
      <ImageCardsSection {...imageCardsSection} />
      <IconCardsSection
        {...iconCardsSectionServices}
        order={1}
        contentBackgroundColor={PRIMARY_BLACK_COLOR}
      />
    </>
  );
}
