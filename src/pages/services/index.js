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
          content="Services at Novelex: Elevating Solutions, Empowering Success. Dive into the heart of Novelex's Services, where our commitment is not just to deliver solutions but to elevate the way businesses, individuals, and organizations connect, communicate, and thrive. Here, services go beyond transactions; they are strategic pillars that embody innovation, expertise, and a relentless pursuit of excellence. Multilingual Solutions: Bridging Language Divides with Precision: In the realm of Multilingual Solutions, Novelex is a pioneer in bridging language divides with precision. From document translation to real-time interpretation and mobile language support, our linguistic experts ensure that communication transcends language barriers. Novelex's Multilingual Solutions redefine the way businesses interact in a globalized world, fostering understanding and inclusivity. Digital and Tech Solutions: Shaping Tomorrow's Technological Landscape: Novelex's Digital and Tech Solutions are at the forefront of shaping tomorrow's technological landscape. Whether it's developing innovative applications, crafting cutting-edge software solutions, or navigating the complexities of digital transformation, our tech experts bring a strategic vision to every project. Novelex's Digital and Tech Solutions empower organizations to not just adapt but thrive in the digital era. Training Programmes: Empowering Minds, Nurturing Talent: In the realm of Training Programmes, Novelex goes beyond conventional education. Our programmes are crafted to empower minds, nurture talent, and ensure that individuals and teams stay ahead of the curve. From language proficiency to tech mastery, Novelex's Training Programmes are a testament to our commitment to continuous learning and the professional development of our community. Legal Consultancy: Navigating Legal Complexities with Finesse: Legal Consultancy at Novelex is a journey of navigating legal complexities with finesse. Our legal experts are not just practitioners; they are strategic advisors who craft innovative solutions to address the dynamic legal landscape. Novelex's Legal Consultancy empowers organizations to make informed decisions, ensuring compliance and mitigating legal risks on a global scale. Accounting Consultancy: Orchestrating Financial Excellence: Within Accounting Consultancy, Novelex orchestrates financial excellence. Our accounting professionals go beyond traditional practices; they are architects of financial strategies that align with organizational goals. Novelex's Accounting Consultancy ensures precision in financial management, compliance with global standards, and strategic financial planning. In the expansive realm of Novelex's Services, each offering is a testament to our commitment to excellence, innovation, and global impact. Beyond providing solutions, we empower success, foster continuous improvement, and contribute to a world where language, technology, and strategic expertise converge for meaningful and lasting impact."
        />
        <title>Services | Novelex Consulting</title>
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
