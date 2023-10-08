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
        <meta
          name="description"
          content="Novelex is not just a workplace; it is a vibrant community where language, technology, and innovation converge to create a truly unique experience. Life at Novelex is a vibrant tapestry woven from innovation, collaboration, and a shared dedication to bridging boundaries. Our culture is a testament to the diverse talents and unique perspectives of our team members. Here, every day is a celebration of achievements - big and small. We're not just about work; we're about making a meaningful impact. Whether it's supporting our communities or prioritizing the well-being of our team, Novelex is more than just a company; it is a way of life. Step into our world and experience the energy, creativity, and the spirit of making a difference. You will take a journey of continuous growth, collective success, and boundless possibilities. Welcome to our community."
        />
        <title>Life at Novelex | Novelex Consulting</title>
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
