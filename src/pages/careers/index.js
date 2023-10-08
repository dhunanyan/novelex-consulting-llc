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
          content="Careers at Novelex: Your Gateway to a Dynamic and Inclusive Professional JourneyEmbark on a transformative professional journey with Careers at Novelex, where opportunities abound, and individual growth is celebrated. Here, a career is more than a job; it's a gateway to a diverse and inclusive work environment that values innovation, collaboration, and the pursuit of excellence.Explore a Multifaceted Professional Landscape:At Novelex, Careers offer a multifaceted professional landscape that spans languages, technology, legal, accounting, and beyond. Your journey is not confined to a singular role; it's an exploration of diverse opportunities that align with your skills, passions, and aspirations. Whether you are a linguistic expert, a tech enthusiast, a legal professional, or a finance specialist, Novelex provides a platform for you to thrive.Collaborate with a Global Network of Talent:Joining Novelex's Careers means becoming part of a global network of talent. Your colleagues are not just coworkers; they are collaborators with diverse backgrounds, experiences, and perspectives. Novelex's commitment to a global perspective ensures that your work contributes to projects that transcend borders, fostering a culture of collaboration that enriches your professional experience.Continuous Learning and Development:Within Novelex's Careers, learning is a constant companion. The company is committed to the continuous development of its team members. Whether through training programs, mentorship initiatives, or skill-building opportunities, your career at Novelex is a journey of continuous learning, ensuring that you stay at the forefront of your field.Inclusive Culture and Empowerment:The culture at Novelex is not just inclusive; it's empowering. Your unique perspectives and talents are not only recognized but celebrated. Novelex fosters an environment where every voice is heard, every idea is valued, and individual contributions make a collective impact. Your career is not just a job; it's an opportunity to be part of something bigger, contributing to Novelex's mission to connect, communicate, and make a lasting impact on the world.Joining Careers at Novelex is an invitation to shape your professional destiny within a dynamic and inclusive environment. It's a commitment to a journey where your skills, passions, and aspirations converge, contributing to the success of a company that operates on a global stage."
        />
        <title>Careers | Novelex Consulting</title>
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
