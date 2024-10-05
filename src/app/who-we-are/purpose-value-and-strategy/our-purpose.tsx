import { HtmlData, Content } from "@data";

import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

export const metadata =
  HtmlData["who-we-are"]["purpose-value-and-strategy"]["our-purpose"];

const { heroSection, iconCardsSection } =
  Content["who-we-are"]["purpose-value-and-strategy"]["our-purpose"];

const Page = () => (
  <>
    <HeroSection {...heroSection} />
    <IconCardsSection
      {...iconCardsSection}
      inverseColors={true}
      forceHideButton={true}
    />
  </>
);

export default Page;
