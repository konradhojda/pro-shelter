import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export const Flex = styled.div<Props>`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
`;
