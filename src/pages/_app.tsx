import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { cx } from "../common/cx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  const adminRoute = router.asPath.includes("/admin");
  console.log(session);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Pro shelter</title>
      </Head>
      {!adminRoute && <Header />}
      <main className={cx("min-h-screen", !adminRoute && "mt-[50px]")}>
        <NextNProgress />
        <ProtectedRoute router={router}>
          <Component {...pageProps} />
        </ProtectedRoute>
      </main>
      <Footer />
    </SessionProvider>
  );
}
