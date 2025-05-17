import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const noLayoutRoutes = ['/user-login', '/signup' ,"/user-register" ,'/user-flow' , '/otp']; // add paths here

export default function App({ Component, pageProps ,router }: AppProps) {
  const isNoLayout = noLayoutRoutes.includes(router.pathname);
  
    return isNoLayout ? (
      <Component {...pageProps} />
    ) : ( <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>);

}
