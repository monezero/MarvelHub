import { Apparitions, Container } from "./styles";

export function CreatorsSquares() {
  return (
    <Container>
      <Apparitions source={require("@assets/creators1.png")} />
      <Apparitions source={require("@assets/creators2.png")} />
    </Container>
  );
}
