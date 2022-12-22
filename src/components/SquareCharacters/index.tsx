import { Apparitions, Container } from "./styles";

export function CharactersSquares() {
  return (
    <Container>
      <Apparitions source={require("@assets/charactersbanner1.png")} />
      <Apparitions source={require("@assets/charactersbanner2.png")} />
      <Apparitions source={require("@assets/charactersbanner3.png")} />
      <Apparitions source={require("@assets/charactersbanner4.png")} />
      <Apparitions source={require("@assets/charactersbanner5.png")} />
    </Container>
  );
}
