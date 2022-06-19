import styled from "styled-components";

interface Props {
  img?: string;
}

export const Hero = styled.section<Props>`
  background-image: url("${(props) => props.img}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  color: #fff;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
`;
