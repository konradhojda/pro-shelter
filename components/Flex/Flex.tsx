import React from "react";
import * as S from "./Flex.style";
import { Property } from "csstype";

interface Props {
  backgroundColor?: string;
  as?: React.ElementType;
  justifyContent?: Property.JustifyContent;
  className?: string;
  alignItems?: Property.AlignItems;
}

export const Flex = ({
  backgroundColor,
  className,
  as,
  justifyContent,
  alignItems,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <S.Flex
      as={as}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      alignItems={alignItems}
      className={className}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
