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
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

export function CharacterContainer() {
  const [isDetails, setisDetails] = useState(false);

  return (
    <Container>
      <Image source={require("@assets/charactercontainer1.png")} />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
      >
        <ContainerTitle>Homem Aranha</ContainerTitle>
        <ContainerDescription>
          Após ser mordido por uma aranha {"\n"} radioativa, Peter Parker se
          torna {"\n"} o amigo da vizinhança, o Homem-{"\n"}Aranha
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
      <Image source={require("@assets/charactercontainer2.png")} />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginLeft: 220 }}
      >
        <ContainerTitle>Wanda Waximoff</ContainerTitle>
        <ContainerDescription>
          Wanda Maximoff foi sequestrada{"\n"} da Sérvia e trazida para a{"\n"}
          Montanha Wundagore, base do{"\n"} Alto Evolucionário.
        </ContainerDescription>
        <ContainerDetails>Ver Detalhes</ContainerDetails>
      </ContainerVisual>
      <Image
        source={require("@assets/charactercontainer3.png")}
        style={{ marginTop: 40 }}
      />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginTop: 400 }}
      >
        <ContainerTitle>Thanos</ContainerTitle>
        <ContainerDescription>
          A lua Titã era governada por{"\n"} Mentor (A'Lars), quando então{"\n"}{" "}
          reinava paz e tecnologia. Mentor{"\n"} tinha dois filhos: Eros e
          Thanos.{" "}
        </ContainerDescription>
        <ContainerDetails>Ver Detalhes</ContainerDetails>
      </ContainerVisual>
      <Image
        source={require("@assets/charactercontainer4.png")}
        style={{ marginTop: 40 }}
      />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginTop: 400, marginLeft: 220 }}
      >
        <ContainerTitle>Hulk</ContainerTitle>
        <ContainerDescription>
          {" "}
          Na história original dos{"\n"} quadrinhos, o Hulk é um selvagem{"\n"}{" "}
          e poderoso alter ego do Dr. Robert{"\n"} Bruce Banner.
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
      <ImageSeeDetails source={require("@assets/detailscharacter1.png")} />
      <ContainerSeeDetails colors={["#f00", "#800000"]}>
        <TitleSeeDetails>Homem Aranha</TitleSeeDetails>
        <ApparitionsSeeDetails>Aparições</ApparitionsSeeDetails>
        <ApparitionsMoviesSeeDetails>
          Homem-Aranha 1{"\n"}
          Homem-Aranha 2 {"\n"}
          Homem Aranha 3 {"\n"}
          Espetacular Homem-Aranha 1{"\n"}
          Espetacular Homem-Aranha 2{"\n"}
          Capitão-América: Guerra Civil{"\n"}
          Homem-Aranha no AranhaVerso{"\n"}
          Homem-Aranha - Homecoming{"\n"}
          Vingadores - Guerra Infinita{"\n"}
          Vingadores - Ultimato{"\n"}
          Homem-Aranha - Far from home{"\n"}
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
        <RatingsSeeDetails>Avaliações dos Fãs</RatingsSeeDetails>
      </ContainerSeeDetails>
      {/* 
      
      <ApparitionsMoviesSeeDetails>
        Homem-Aranha 1{"\n"}
        Homem-Aranha 2 {"\n"}
        Homem Aranha 3 {"\n"}
        Espetacular Homem-Aranha 1{"\n"}
        Espetacular Homem-Aranha 2{"\n"}
        Capitão-América: Guerra Civil{"\n"}
        Homem-Aranha no AranhaVerso{"\n"}
        Homem-Aranha - Homecoming{"\n"}
        Vingadores - Guerra Infinita{"\n"}
        Vingadores - Ultimato{"\n"}
        Homem-Aranha - Far from home{"\n"}
      </ApparitionsMoviesSeeDetails> */}
    </Container1>
  );
};
export default CharacterContainer;
