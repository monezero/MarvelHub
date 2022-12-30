import { View, ViewPropsAndroid } from "react-native";
import {
  ContainerTitle,
  Container,
  Image,
  ContainerBottom,
  ContainerVisual,
  ContainerDescription,
  ContainerDetails,
  ImageSeeDetails,
  ContainerSeeDetails,
  Container1,
  TitleSeeDetails,
  ApparitionsSeeDetails,
  ApparitionsMoviesSeeDetails,
  RatingsSeeDetails,
  ImageContainer,
  BuySeeDetails,
  BuyIconSeeDetails,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export function MoviesContainer() {
  const [isDetails, setisDetails] = useState(false);
  const [isOrder, setisOrder] = useState(false);

  return (
    <Container>
      <Image source={require("@assets/moviescontainer1.png")} />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
      >
        <ContainerTitle>Homem de Ferro</ContainerTitle>
        <ContainerDescription>
          Tony Stark (Robert Downey Jr.) é{"\n"} um industrial bilionário, que
          {"\n"} também é um brilhante inventor,{"\n"} ao ser sequestrado...
        </ContainerDescription>
        <ContainerDetails
          onPress={() => {
            setisDetails(true);
          }}
        >
          Ver detalhes
        </ContainerDetails>
      </ContainerVisual>
      {isDetails && <Details onPress={() => setisDetails(false)} />}
      <Image source={require("@assets/moviescontainer2.png")} />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginLeft: 220 }}
      >
        <ContainerTitle>Homem de Ferro 2</ContainerTitle>
        <ContainerDescription>
          O mundo já sabe que o inventor{"\n"} bilionário Tony Stark (Robert
          {"\n"} Downey Jr.) é o super-herói{"\n"} blindado Homem de Ferro....
        </ContainerDescription>
        <ContainerDetails>Ver Detalhes</ContainerDetails>
      </ContainerVisual>
      <Image source={require("@assets/thor.png")} style={{ marginTop: 40 }} />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginTop: 400 }}
      >
        <ContainerTitle>Thor</ContainerTitle>
        <ContainerDescription>
          Quando é banido do reino de{"\n"} Asgard e exilado na Terra, o{"\n"}{" "}
          arrogante guerreiro Thor (Chris{"\n"} Hemsworth) é obrigado a lutar
          {"\n"}
          para reaver seus poderes perdidos.
        </ContainerDescription>
        <ContainerDetails>Ver Detalhes</ContainerDetails>
      </ContainerVisual>
      <Image
        source={require("@assets/captain_america.png")}
        style={{ marginTop: 40 }}
      />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginTop: 400, marginLeft: 220 }}
      >
        <ContainerTitle>Capitão America </ContainerTitle>
        <ContainerDescription>
          Em Capitão América: O Primeiro{"\n"} Vingador, conhecemos a história
          {"\n"} de Steve Rogers (Chris Evans) e{"\n"} como ele se tornou o
          melhor{"\n"} soldado do mundo.
        </ContainerDescription>
        <ContainerDetails>Ver Detalhes</ContainerDetails>
      </ContainerVisual>
    </Container>
  );
}

interface Props {
  onPress: () => void;
}

const Details = (props: Props) => {
  return (
    <Container1>
      <ImageSeeDetails source={require("@assets/parabola.png")} />
      <ContainerSeeDetails colors={["#f00", "#800000"]}>
        <TitleSeeDetails>
          Surfista Prateado:{"\n"}
          Parábola
        </TitleSeeDetails>
        <ApparitionsMoviesSeeDetails>
          O único oponente do Devorador de{"\n"} Mundos é o herói que ele
          aprisionou na Terra: o Surfista Prateado.
        </ApparitionsMoviesSeeDetails>
        <Feather
          name="x-circle"
          size={30}
          color="white"
          style={{
            marginTop: 420,
            marginLeft: 300,
            position: "absolute",
            zIndex: 5,
          }}
        />
        <BuySeeDetails>Disponível para compra</BuySeeDetails>
        <BuyIconSeeDetails
          source={require("@assets/americanas.png")}
          style={{ marginLeft: 104 }}
        ></BuyIconSeeDetails>
        <BuyIconSeeDetails
          source={require("@assets/amazon.png")}
        ></BuyIconSeeDetails>

        <RatingsSeeDetails>Crítica</RatingsSeeDetails>
        <FontAwesome
          name="star"
          size={24}
          color="orange"
          style={{
            marginTop: 420,
            marginLeft: 30,
            position: "absolute",
            zIndex: 5,
          }}
        />
        <FontAwesome
          name="star"
          size={24}
          color="orange"
          style={{
            marginTop: 420,
            marginLeft: 60,
            position: "absolute",
            zIndex: 5,
          }}
        />
        <FontAwesome
          name="star"
          size={24}
          color="orange"
          style={{
            marginTop: 420,
            marginLeft: 90,
            position: "absolute",
            zIndex: 5,
          }}
        />
        <FontAwesome
          name="star"
          size={24}
          color="orange"
          style={{
            marginTop: 420,
            marginLeft: 120,
            position: "absolute",
            zIndex: 5,
          }}
        />
        <FontAwesome
          name="star"
          size={24}
          color="gray"
          style={{
            marginTop: 420,
            marginLeft: 150,
            position: "absolute",
            zIndex: 5,
          }}
        />
      </ContainerSeeDetails>
    </Container1>
  );
};
export default MoviesContainer;
