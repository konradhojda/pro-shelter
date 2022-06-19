import styled from "styled-components";

interface Props {
  minHeight?: string;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  min-height: ${(props) => props.minHeight};
  @media all and (min-width: 1200px) {
    padding: 0;
    max-width: 1200px;
  }
`;
