import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";

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
        <link rel="icon" href="/temp-logo.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <title>Novelex Consulting LLC</title>
      </Head>
      <div></div>
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
