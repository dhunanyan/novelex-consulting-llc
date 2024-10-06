import {
  BlankSection,
  HeroSection,
  IconCardsSection,
  ImageCardsSection,
  SummarySection,
  TilesSection,
  type BlankSectionPropsType,
  type HeroSectionPropsType,
  type IconCardsSectionPropsType,
  type ImageCardsSectionPropsType,
  type SummarySectionPropsType,
  type TilesSectionPropsType,
} from "@components";
import { Sections } from "@config";

export type SectionPropsType =
  | BlankSectionPropsType
  | HeroSectionPropsType
  | IconCardsSectionPropsType
  | ImageCardsSectionPropsType
  | SummarySectionPropsType
  | TilesSectionPropsType;

export const renderSection = (
  section: SectionPropsType | undefined,
  index: number = 0
) => {
  if (!section) {
    return null;
  }

  switch (section.type) {
    case Sections.HERO:
      return <HeroSection {...(section as HeroSectionPropsType)} />;
    case Sections.SUMMARY:
      return <SummarySection {...(section as SummarySectionPropsType)} />;
    case Sections.BLANK:
      return <BlankSection {...(section as BlankSectionPropsType)} />;
    case Sections.ICON_CARDS:
      console.log(section.cards);
      return (
        <IconCardsSection
          {...(section as IconCardsSectionPropsType)}
          inverseColors={index % 2 === 0}
          order={index % 2 !== 0 ? 2 : 0}
        />
      );
    case Sections.IMAGE_CARDS:
      return <ImageCardsSection {...(section as ImageCardsSectionPropsType)} />;
    case Sections.TILES:
      return <TilesSection {...(section as TilesSectionPropsType)} />;
    default:
      return <div>ERROR: Could not find section type</div>;
  }
};
