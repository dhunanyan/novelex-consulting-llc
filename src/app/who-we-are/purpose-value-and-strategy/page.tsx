import { HtmlData, Content } from "@data";

import { HeroSection, IconCardsSection } from "@components";

export const metadata =
  HtmlData["who-we-are"]["purpose-value-and-strategy"]["index"];

const {
  index: { heroSection },
  "our-value": { iconCardsSection: iconCardsSectionValues },
  "our-purpose": { iconCardsSection: iconCardsSectionPurpose },
  "our-strategy": { iconCardsSection: iconCardsSectionStrategy },
} = Content["who-we-are"]["purpose-value-and-strategy"];

const Page = () => (
  <main>
    <HeroSection {...heroSection} />
    <IconCardsSection {...iconCardsSectionPurpose} inverseColors={true} />
    <IconCardsSection {...iconCardsSectionValues} order={2} />
    <IconCardsSection {...iconCardsSectionStrategy} inverseColors={true} />
  </main>
);

export default Page;
