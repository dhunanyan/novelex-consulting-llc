import { HtmlData, Content } from "@data";
import { Sections } from "@config";
import { renderSection, SectionPropsType } from "@utils";

const PAGE_ID = "careers";
const SUB_PAGE_ID = "join-our-team";

export const metadata = HtmlData[PAGE_ID][SUB_PAGE_ID]["index"];

const sections = Content[PAGE_ID][SUB_PAGE_ID] as unknown as {
  [key: string]: SectionPropsType[];
};

const sectionsToRender = [
  // HeroSection
  ...(Content[PAGE_ID][SUB_PAGE_ID].index as SectionPropsType[]),
  // Icon Cards Sub pages
  ...Object.keys(sections).map((key) =>
    sections[key].find((s) => s.type === Sections.ICON_CARDS)
  ),
];

const Page = () => (
  <>
    {sectionsToRender.map((section, index) =>
      renderSection({ section, index, styleEvenIconCards: true })
    )}
  </>
);

export default Page;
