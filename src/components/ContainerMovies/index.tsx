import { View } from "react-native";
import {
  ContainerTitle,
  Container,
  Image,
  ContainerBottom,
  ContainerVisual,
  ContainerDescription,
  ContainerDetails,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export function MoviesContainer() {
  return (
    <View>
      <Container>
        <Image source={require("@assets/moviescontainer1.png")} />
        <ContainerVisual
          colors={["transparent", "#f00"]}
          start={{ x: 3, y: 3 }}
          end={{ x: 0, y: 0 }}
        ></ContainerVisual>
        <ContainerDescription
          style={{
            marginLeft: 45,
            marginTop: 170,
          }}
        >
          Tony Stark (Robert Downey Jr.) é{"\n"} um industrial bilionário, que
          {"\n"} também é um brilhante inventor,{"\n"} ao ser sequestrado...
        </ContainerDescription>
        <ContainerDetails
          style={{
            marginLeft: 70,
            marginTop: 220,
          }}
        >
          Ver detalhes
        </ContainerDetails>
        <ContainerTitle
          style={{
            marginLeft: 56,
            marginTop: 140,
          }}
        >
          Homem de Ferro
        </ContainerTitle>

        <Image source={require("@assets/moviescontainer2.png")} />
        <ContainerVisual
          colors={["transparent", "#f00"]}
          start={{ x: 3, y: 3 }}
          end={{ x: 0, y: 0 }}
          style={{ marginLeft: 220 }}
        ></ContainerVisual>
        <ContainerTitle
          style={{
            marginLeft: 240,
            marginTop: 140,
          }}
        >
          Homem de Ferro 2
        </ContainerTitle>
        <ContainerDescription
          style={{
            marginLeft: 236,
            marginTop: 170,
          }}
        >
          O mundo já sabe que o inventor{"\n"} bilionário Tony Stark (Robert
          {"\n"} Downey Jr.) é o super-herói{"\n"} blindado Homem de Ferro....
        </ContainerDescription>
        <ContainerDetails
          style={{
            marginLeft: 265,
            marginTop: 220,
          }}
        >
          Ver detalhes
        </ContainerDetails>
      </Container>
      <ContainerBottom>
        <Image source={require("@assets/thor.png")} />
        <ContainerVisual
          colors={["transparent", "#f00"]}
          start={{ x: 3, y: 3 }}
          end={{ x: 0, y: 0 }}
          style={{
            marginTop: 114,
          }}
        ></ContainerVisual>
        <ContainerTitle
          style={{
            marginLeft: 94,
            marginTop: 140,
          }}
        >
          Thor
        </ContainerTitle>
        <ContainerDescription
          style={{
            marginLeft: 50,
            marginTop: 170,
          }}
        >
          Quando é banido do reino de{"\n"} Asgard e exilado na Terra, o{"\n"}{" "}
          arrogante guerreiro Thor (Chris{"\n"} Hemsworth) é obrigado a lutar
          {"\n"} para reaver seus poderes perdidos.
        </ContainerDescription>
        <ContainerDetails
          style={{
            marginLeft: 72,
            marginTop: 216,
          }}
        >
          Ver detalhes
        </ContainerDetails>
        <Image source={require("@assets/captain_america.png")} />
        <ContainerVisual
          colors={["transparent", "#f00"]}
          start={{ x: 3, y: 3 }}
          end={{ x: 0, y: 0 }}
          style={{ marginLeft: 220 }}
        ></ContainerVisual>

        <ContainerTitle style={{ marginLeft: 246, marginTop: 142 }}>
          Capitão America
        </ContainerTitle>
        <ContainerDescription style={{ marginLeft: 236, marginTop: 172 }}>
          Em Capitão América: O Primeiro{"\n"} Vingador, conhecemos a história
          {"\n"} de Steve Rogers (Chris Evans) e{"\n"} como ele se tornou o
          melhor{"\n"} soldado do mundo.
        </ContainerDescription>
        <ContainerDetails style={{ marginLeft: 260, marginTop: 218 }}>
          Ver detalhes
        </ContainerDetails>
      </ContainerBottom>
    </View>
  );
}
