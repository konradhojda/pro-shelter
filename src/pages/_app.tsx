import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Pro shelter</title>
      </Head>
      <ProtectedRoute router={router}>
        <Component {...pageProps} />
      </ProtectedRoute>
      <Footer />
    </SessionProvider>
  );
}
