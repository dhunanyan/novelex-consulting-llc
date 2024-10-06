import {
  HeroSection,
  IconCardsSection,
  ImageCardsSection,
  SummarySection,
} from "@components";

import { Colors } from "@config";

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
        contentBackgroundColor={Colors.PRIMARY_BLACK_COLOR}
      />
    </>
  );
}
