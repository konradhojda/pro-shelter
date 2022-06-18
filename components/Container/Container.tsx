import React from "react";
import * as S from "./Container.style";

export const Container = ({ children }: React.PropsWithChildren) => (
  <S.Container>{children}</S.Container>
);

export default Container;
