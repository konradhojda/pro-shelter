import React from "react";
import * as S from "./Flex.style";

interface Props {
  backgroundColor?: string;
  className?: string;
}

export const Flex = ({
  backgroundColor,
  className,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <S.Flex backgroundColor={backgroundColor} className={className}>
      {children}
    </S.Flex>
  );
};

export default Flex;
