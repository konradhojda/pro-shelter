import React from "react";
import * as S from "./Container.style";

interface Props {
  minHeight?: string;
}

export const Container = ({
  minHeight,
  children,
}: React.PropsWithChildren<Props>) => (
  <S.Container minHeight={minHeight}>{children}</S.Container>
);

export default Container;
