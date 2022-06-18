import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  @media all and (min-width: 1200px) {
    padding: 0;
    max-width: 1200px;
  }
`;
