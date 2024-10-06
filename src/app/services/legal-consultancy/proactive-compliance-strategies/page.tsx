import { Content } from "@data";
import { renderSection, SectionPropsType } from "@utils";

const PAGE_ID = "services";
const SUB_PAGE_ID = "legal-consultancy";
const CURRENT_PAGE_ID = "proactive-compliance-strategies";

const sections = (
  Content[PAGE_ID] as unknown as {
    [key: string]: {
      [key: string]: SectionPropsType[];
    };
  }
)[SUB_PAGE_ID][CURRENT_PAGE_ID];

const Page = () => (
  <>{sections.map((section, index) => renderSection({ section, index }))}</>
);

export default Page;
