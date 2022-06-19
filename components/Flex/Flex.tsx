import {Property} from "csstype";
import React from "react";
import * as S from "./Flex.style";

interface Props {
  backgroundColor?: string;
  as?: React.ElementType;
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  className?: string;
  alignItems?: Property.AlignItems;
}

export const Flex = ({
                       backgroundColor,
                       className,
                       as,
                       justifyContent,
                       alignItems,
                       flexDirection,
                       children,
                     }: React.PropsWithChildren<Props>) => {
  return (
      <S.Flex
          as={as}
          backgroundColor={backgroundColor}
          justifyContent={justifyContent}
          alignItems={alignItems}
          flexDirection={flexDirection}
          className={className}
      >
        {children}
      </S.Flex>
  );
};

export default Flex;
