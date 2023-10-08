import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { HeaderLayout } from "@/components/Header/HeaderLayout/HeaderLayout";
import { Navigator } from "@/components/Navigator/Navigator";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
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
