import { ApparitionsBanner, Container } from "./styles";

export function ImagesBanner() {
  return (
    <Container>
      <ApparitionsBanner source={require("@assets/apparitions1.png")} />
      <ApparitionsBanner source={require("@assets/apparitions2.png")} />
      <ApparitionsBanner source={require("@assets/apparitions3.png")} />
      <ApparitionsBanner source={require("@assets/apparitions4.png")} />
      <ApparitionsBanner source={require("@assets/apparitions5.png")} />
    </Container>
  );
}
