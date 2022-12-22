import { ComicsBanner, Container } from "./styles";

export function HqsBanner() {
  return (
    <Container>
      <ComicsBanner source={require("@assets/comicbooks1.png")} />
      <ComicsBanner source={require("@assets/comicbooks2.png")} />
    </Container>
  );
}
