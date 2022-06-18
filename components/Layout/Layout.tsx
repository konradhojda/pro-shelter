import React, { Fragment } from "react";
import Flex from "../Flex/Flex";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Logo from "./Logo/Logo";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Fragment>
      <Flex>
        <Logo />
        <Header />
      </Flex>
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
