import { StatusBar } from "expo-status-bar";
import { Image, Animated } from "react-native";
import { useFonts } from "expo-font";
import { Container } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import LoginSVG from "@assets/ultimato_login.svg";
import { CheckBox } from "@components/Checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { Fixator, TextMain, TextSecond } from "@components/Input/styles";
import theme from "@theme/index";

export function SignIn() {
  return (
    <Container>
      <LoginSVG
        style={{
          position: "absolute",
          bottom: 0,
        }}
      />
      <Header />
      <Input placeholder="E-mail" autoCorrect={false}></Input>
      <Input placeholder="Senha" autoCorrect={false}></Input>
      <Button title={"Entrar"} />
      <Fixator>
        <TextMain>É novo(a) aqui?</TextMain>
        <TextSecond>Cadastre-se</TextSecond>
      </Fixator>
      <LinearGradient colors={["#000", "#000"]}></LinearGradient>
    </Container>
  );
}
