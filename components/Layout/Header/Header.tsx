import Flex from "../../Flex/Flex";
import React from "react";

export const Header = ({ children }: React.PropsWithChildren) => {
  return (
    <Flex as="header" justifyContent="space-between">
      {children}
    </Flex>
  );
};

export default Header;
