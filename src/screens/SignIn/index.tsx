import { StatusBar } from "expo-status-bar";
import { Image, Animated } from "react-native";
import { useFonts } from "expo-font";
import { Container } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import LoginSVG from "@assets/ultimato_login.svg";
import CheckBox from "@components/Checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { TextMain } from "@components/Input/styles";
import theme from "@theme/index";
import { height, width } from "@utils/dimensions";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignIn() {
  return (
    <Container>
      <LoginSVG
        style={{
          position: "absolute",
          bottom: 0,
        }}
      />
      <LinearGradient
        style={{
          position: "absolute",
          bottom: 0,
          width: width,
          height: height * 0.5,
        }}
        colors={["#000", "transparent"]}
        start={{ x: 0, y: 0.15 }}
        end={{ x: 0, y: 1 }}
      ></LinearGradient>
      <SafeAreaView>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Header />

          <Input placeholder="E-mail" autoCorrect={false}></Input>
          <Input placeholder="Senha" autoCorrect={false}></Input>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Button title={"Entrar"} />
            <CheckBox />
            <TextMain>
              É novo(a) aqui?
              <TextMain style={{ color: "#FF0000" }}>
                {" "}
                Cadastre-se{" "}
              </TextMain>{" "}
            </TextMain>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
}
