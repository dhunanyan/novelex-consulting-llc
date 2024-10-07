import { HtmlData, Content, GeneralContent } from "@data";
import { Sections } from "@config";
import { renderSection, SectionPropsType } from "@utils";

const PAGE_ID = "who-we-are";
const SUB_PAGE_ID = "climate-strategy";
const CURRENT_PAGE_ID = "index";

export const metadata = HtmlData[PAGE_ID][SUB_PAGE_ID][CURRENT_PAGE_ID];

const sections = Content[PAGE_ID][SUB_PAGE_ID] as unknown as {
  [key: string]: SectionPropsType[];
};

const firstChunk = Object.keys(sections).map((key) =>
  sections[key].find((s) => s.type === Sections.ICON_CARDS)
);
const secondChunk = firstChunk.splice(0, 3);

const sectionsToRender = [
  // HeroSection
  ...(Content[PAGE_ID][SUB_PAGE_ID][CURRENT_PAGE_ID] as SectionPropsType[]),
  // Some of the Icon Cards from Sub pages
  ...firstChunk,
  // Set of Tiles of main pages
  GeneralContent as SectionPropsType,
  // The rest of the Icon Cards from Sub pages
  ...secondChunk,
];

const Page = () => (
  <>
    {sectionsToRender.map((section, index) =>
      renderSection({ section, index, styleEvenIconCards: true })
    )}
  </>
);

export default Page;
