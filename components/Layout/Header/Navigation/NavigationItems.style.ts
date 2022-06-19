import Link from "next/link";
import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Li = styled.li`
  margin: 0 5px;
  padding: 0 5px;
  &.active {
    a {
      position: relative;
      font-weight: bold;
      &::before {
        content: "";
        background-image: url("/paw.svg");
        background-repeat: no-repeat;
        height: 30px;
        width: 30px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.2;
      }
    }
  }
`;

export const NavigationLink = styled(Link)``;
