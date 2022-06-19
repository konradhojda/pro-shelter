import type {AppProps} from "next/app";
import {Fragment} from "react";
import Container from "../components/Container/Container";
import Flex from "../components/Flex/Flex";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import "../styles/globals.css";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Fragment>
            <Header/>
            <Flex as="main" flexDirection="column">
                <Container minHeight="calc(100vh - 50px - 20px)">
                    <Component {...pageProps} />
                </Container>
            </Flex>
            <Footer/>
        </Fragment>
    );
}

export default MyApp;
