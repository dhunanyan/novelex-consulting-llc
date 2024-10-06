import { Content } from "@data";
import { renderSection, SectionPropsType } from "@utils";

const PAGE_ID = "careers";
const SUB_PAGE_ID = "index";

const sections = Content[PAGE_ID][SUB_PAGE_ID] as SectionPropsType[];

const Page = () => (
  <>
    {sections.map((section, index) =>
      renderSection({ section, index, styleEvenIconCards: true })
    )}
  </>
);

export default Page;
