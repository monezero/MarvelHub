import { ComicsBanner, Container } from "./styles";

export function HqsBanner() {
  return (
    <Container>
      <ComicsBanner
        source={require("@assets/comicbooks1.png")}
        style={{ marginLeft: 30 }}
      />
      <ComicsBanner source={require("@assets/comicbooks2.png")} />
    </Container>
  );
}
