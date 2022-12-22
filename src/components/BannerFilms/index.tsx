import { FilmsBanner, Container } from "./styles";

export function FilmBanner() {
  return (
    <Container>
      <FilmsBanner source={require("@assets/movies1.png")} />
      <FilmsBanner source={require("@assets/movies2.png")} />
    </Container>
  );
}
