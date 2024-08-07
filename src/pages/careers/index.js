import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { PAGES_HTML } from "@/data";

export default function HomePage({
  welcomeSection,
  whoWeAre,
  services,
  imageCardsSection,
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={PAGES_HTML["careers"]["index"].keywords}
        />
        <meta
          name="description"
          content={PAGES_HTML["careers"]["index"].description}
        />
        <title>{PAGES_HTML["careers"]["index"].title}</title>
      </Head>
    </>
  );
}

export async function getServerSideProps() {
  const welcomeSection = await getCurrentContentfulType("welcomeSection");
  const whoWeAre = await getCurrentContentfulType(
    "iconCardsSection",
    "whoWeAre"
  );
  const imageCardsSection = await getCurrentContentfulType("imageCardsSection");
  const services = await getCurrentContentfulType(
    "iconCardsSection",
    "services"
  );

  return { props: { welcomeSection, whoWeAre, services, imageCardsSection } };
}
