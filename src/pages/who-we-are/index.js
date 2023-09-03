import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { WhoWeAre } from "@/components/WhoWeAre/WhoWeAre";

export default function HomePage({ welcomeSection }) {
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
      <WhoWeAre welcomeSection={welcomeSection} />
    </>
  );
}

export async function getServerSideProps() {
  const welcomeSection = await getCurrentContentfulType(
    "welcomeSection",
    "whoWeAre"
  );
  // const whoWeAre = await getCurrentContentfulType(
  //   "iconCardsSection",
  //   "whoWeAre"
  // );
  // const imageCardsSection = await getCurrentContentfulType("imageCardsSection");
  // const services = await getCurrentContentfulType(
  //   "iconCardsSection",
  //   "services"
  // );

  return { props: { welcomeSection } };
}
