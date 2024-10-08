import { CompliancePage } from "@components/CompliancePage";
import { ComplianceData, HtmlData } from "@data";

const PAGE_ID = "compliance-pages";
const SUB_PAGE_ID = "accessibility-notice";

export const metadata = HtmlData[PAGE_ID][SUB_PAGE_ID];

const sections = ComplianceData[SUB_PAGE_ID];

const Page = () => <>{<CompliancePage {...sections} />}</>;

export default Page;
