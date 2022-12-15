import { ContainerMarvel, Logo, Title, Container, Subtitle } from "./styles";

export function Header() {
  return (
    <Container>
      <ContainerMarvel>
        <Logo>MARVEL</Logo>
      </ContainerMarvel>
      <Title>Bem-Vindo!</Title>
      <Subtitle>Fazer login</Subtitle>
    </Container>
  );
}
