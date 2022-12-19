import {
  ContainerMarvel,
  Logo,
  Title,
  Container,
  Subtitle,
  HeaderStyleProps,
} from "./styles";
import { ViewProps } from "react-native";
export function Header() {
  type Props = ViewProps & {
    type?: HeaderStyleProps;
  };

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
