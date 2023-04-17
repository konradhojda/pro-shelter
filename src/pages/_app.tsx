import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Pro shelter</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}
