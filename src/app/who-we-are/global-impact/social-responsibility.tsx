import { HtmlData, Content } from "@data";

import { HeroSection, IconCardsSection } from "@components";

export const metadata =
  HtmlData["who-we-are"]["global-impact"]["social-responsibility"];

const { heroSection, iconCardsSection } =
  Content["who-we-are"]["global-impact"]["social-responsibility"];

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
