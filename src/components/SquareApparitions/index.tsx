import { Apparitions, Container } from "./styles";

export function ApparitionSquares() {
  return (
    <Container>
      <Apparitions source={require("@assets/apparitions1.png")} />
      <Apparitions source={require("@assets/apparitions2.png")} />
      <Apparitions source={require("@assets/apparitions3.png")} />
      <Apparitions source={require("@assets/apparitions4.png")} />
      <Apparitions source={require("@assets/apparitions5.png")} />
    </Container>
  );
}
