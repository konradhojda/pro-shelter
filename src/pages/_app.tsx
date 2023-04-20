import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { cx } from "../common/cx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  const isAuthorized = router.asPath.includes("/admin");

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Pro shelter</title>
      </Head>
      {!isAuthorized && <Header />}
      <main className={cx("min-h-screen", !isAuthorized && "mt-[50px]")}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </SessionProvider>
  );
}
