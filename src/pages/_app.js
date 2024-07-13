import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderLayout } from "@/components/Header/HeaderLayout/HeaderLayout";
import { Navigator } from "@/components/Navigator/Navigator";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps, welcomeSection }) {
  const pathname = usePathname();
  const list = pathname.substring(1).split("/");
  const isNavigatorActive = list.length > 1;

  return (
    <>
      <Header />
      <HeaderLayout />
      {isNavigatorActive && <Navigator list={list} />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const welcomeSection = await getCurrentContentfulType(
    "welcomeSection",
    "whoWeAre"
  );
  const blankSection0 = await getCurrentContentfulType(
    "blankSection",
    "whoWeAre",
    0
  );
  const tilesSection = await getCurrentContentfulType(
    "tilesSection",
    "whoWeAre"
  );
  const blankSection1 = await getCurrentContentfulType(
    "blankSection",
    "whoWeAre",
    1
  );
  const iconCardsSection = await getCurrentContentfulType(
    "iconCardsSection",
    "whoWeAre"
  );

  return {
    props: {
      welcomeSection,
      blankSection0,
      tilesSection,
      blankSection1,
      iconCardsSection,
    },
  };
}
