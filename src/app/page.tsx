import {
  HeroSection,
  IconCardsSection,
  ImageCardsSection,
  SummarySection,
} from "@components";

import { PRIMARY_BLACK_COLOR } from "@utils/styles";

import { Content } from "@data";

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
