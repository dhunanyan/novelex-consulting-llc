import { Header } from "@/components/Header/Header";
import { Navigator } from "@/components/Navigator/Navigator";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const list = pathname.substring(1).split("/");
  const isNavigatorActive = list.length > 1;

  // TODO Schować navigator jak się wprowadza zły route

  return (
    <>
      <Header />
      {isNavigatorActive && <Navigator list={list} />}
      <Component {...pageProps} />
    </>
  );
}
