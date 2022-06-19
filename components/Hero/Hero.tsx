import Container from "../Container/Container";
import * as S from "./Hero.style";

export const Hero = () => (
  <S.Hero img="/shelter-hero.jpeg">
    <Container>
      <S.Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum cumque
        debitis dolor, dolores earum excepturi facere illo laboriosam libero
        minima natus nulla quam reiciendis sapiente sequi tempore, veniam
        voluptas.
      </S.Content>
    </Container>
  </S.Hero>
);

export default Hero;
