import { Header } from "@/components/Header/Header";
import { Navigator } from "@/components/Navigator/Navigator";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const list = pathname.substring(1).split("/");

  // TODO trzeba będzie zrobić mapping, które będzie miało key - pathname, value - displayText dla navigatora.
  // TODO zrobić z tych itemów linki w nawigatorze + style dodać
  return (
    <>
      <Header />
      {list.length > 1 && <Navigator list={list} />}
      <Component {...pageProps} />
    </>
  );
}
