import styled from "styled-components";

interface Props {
  backgroundColor?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Flex = styled.div<Props>`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
