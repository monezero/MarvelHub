import { TouchableOpacity, View, ViewPropsAndroid } from "react-native";
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
  SortBy,
  SortByText,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export function MoviesContainer() {
  const [isDetails, setisDetails] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("Lancamento");
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
        <ContainerDetails>Ver detalhes</ContainerDetails>
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

      <Picker onPressOption={(option: string) => setSelectedOption(option)} />
      {selectedOption === "Cronologia" && (
        <Container>
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
            <ContainerTitle>Capitão America</ContainerTitle>
            <ContainerDescription>
              Em Capitão América: O Primeiro{"\n"} Vingador, conhecemos a
              história
              {"\n"} de Steve Rogers (Chris Evans) e{"\n"} como ele se tornou o
              melhor{"\n"} soldado do mundo.
            </ContainerDescription>
            <ContainerDetails
              onPress={() => {
                setisDetails(true);
              }}
            >
              Ver Detalhes
            </ContainerDetails>
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
            <ContainerTitle>Capitã Marvel</ContainerTitle>
            <ContainerDescription>
              Capitã Marvel, parte do exército{"\n"} de elite dos Kree, uma raça
              {"\n"}
              alienígena, encontra-se no meio{"\n"} de uma batalha entre seu
              povo e{"\n"} os Skrulls.{" "}
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
            <ContainerTitle>Homem de Ferro</ContainerTitle>
            <ContainerDescription>
              Tony Stark (Robert Downey Jr.) é{"\n"} um industrial bilionário,
              que{"\n"}
              também é um brilhante inventor{"\n"}, ao ser sequestrado...
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
            <ContainerTitle>Homem de Ferro 2</ContainerTitle>
            <ContainerDescription>
              O mundo já sabe que o inventor{"\n"} bilionário Tony Stark (Robert
              {"\n"}
              Downey Jr.) é o super-herói{"\n"} blindado Homem de Ferro....
            </ContainerDescription>
            <ContainerDetails>Ver Detalhes</ContainerDetails>
          </ContainerVisual>
        </Container>
      )}
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
          Capitão-América:{"\n"}Primeiro Vingador
        </TitleSeeDetails>
        <ApparitionsMoviesSeeDetails>
          Em capitão América: O Primeiro{"\n"} Vingador, conhecemos a história
          {"\n"} de Steve Rogers (Chris Evans) e{"\n"} como ele se tornou o
          melhor{"\n"} soldado do mundo
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
          onPress={props.onPress}
        />
        <BuySeeDetails>Disponível em streaming</BuySeeDetails>
        <BuyIconSeeDetails
          source={require("@assets/disney+.png")}
          style={{ marginLeft: 104 }}
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

interface PickerProps {
  onPressOption: (option: string) => void;
}

function Picker(props: PickerProps) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <SortBy>
      <TouchableOpacity
        onPress={() => setShowOptions((prevState) => !prevState)}
      >
        <SortByText>Filtar por V</SortByText>
      </TouchableOpacity>
      {showOptions ? (
        <>
          <TouchableOpacity onPress={() => props.onPressOption("Lancamento")}>
            <SortByText>Lançamento</SortByText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.onPressOption("Cronologia")}>
            <SortByText>Cronologia</SortByText>
          </TouchableOpacity>
        </>
      ) : null}
    </SortBy>
  );
}

export default MoviesContainer;
