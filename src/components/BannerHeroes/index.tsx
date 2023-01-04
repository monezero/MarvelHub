import { HeroesBanner, Container } from "./styles";

export function CharacterBanner() {
  return (
    <Container>
      <HeroesBanner
        source={require("@assets/characters1.png")}
        style={{ marginLeft: 30 }}
      />
      <HeroesBanner source={require("@assets/characters2.png")} />
    </Container>
  );
}
