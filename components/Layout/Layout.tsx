import React from "react";
import Container from "../Container/Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Logo from "./Logo/Logo";
import HeaderItems from "./Header/HeaderItems";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container>
      <Header>
        <Logo />
        <HeaderItems />
      </Header>
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
