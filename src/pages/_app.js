import { Header } from "@/components/Header/Header";
import { Navigator } from "@/components/Navigator/Navigator";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navigator />
      <Component {...pageProps} />
    </>
  );
}
