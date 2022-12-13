import { StatusBar } from "expo-status-bar";
import { Image, Animated } from "react-native";
import { useFonts } from "expo-font";
import { Container } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import LoginSVG from "@assets/ultimato_login.svg";

export function SignIn() {
  return (
    <Container>
      <Header />
      <Input placeholder="E-mail" autoCorrect={false}></Input>
      <Input placeholder="Senha" autoCorrect={false}></Input>
      <Button title={"Entrar"} />
      <LoginSVG />
    </Container>
  );
}
