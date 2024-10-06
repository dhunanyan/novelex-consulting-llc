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

export const renderSection = ({
  section,
  index = 0,
  styleEvenIconCards = false,
}: {
  section: SectionPropsType | undefined;
  index: number;
  styleEvenIconCards?: boolean;
}) => {
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
      return (
        <IconCardsSection
          {...(section as IconCardsSectionPropsType)}
          {...(styleEvenIconCards
            ? {
                inverseColors: index % 2 === 0,
                order: index % 2 !== 0 ? 2 : 0,
              }
            : {})}
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
