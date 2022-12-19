import { HeroesBanner, Container } from "./styles";

export function CharactersBanner() {
  return (
    <Container>
      <HeroesBanner source={require("@assets/characters1.png")} />

      <HeroesBanner source={require("@assets/characters2.png")} />
    </Container>
  );
}
