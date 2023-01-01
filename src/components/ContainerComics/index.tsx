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

export function ComicsContainer() {
  const [isDetails, setisDetails] = useState(false);

  return (
    <Container>
      <Image source={require("@assets/comicscontainer.png")} />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
      >
        <ContainerTitle>Parábola</ContainerTitle>
        <ContainerDescription>
          O único oponente do Devorador{"\n"} de Mundos é o herói que ele{"\n"}{" "}
          aprisionou na Terra: o Surfista{"\n"} Prateado.
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
      <Image source={require("@assets/comicscontainer2.png")} />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginLeft: 220 }}
      >
        <ContainerTitle>Wolverine - Origem</ContainerTitle>
        <ContainerDescription>
          Origem é uma minissérie em{"\n"} quadrinhos publicada pela Marvel
          {"\n"} Comics em seis edições, entre 2001{"\n"} e 2002
        </ContainerDescription>
        <ContainerDetails>Ver Detalhes</ContainerDetails>
      </ContainerVisual>
      <Image source={require("@assets/hqs3.png")} style={{ marginTop: 40 }} />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginTop: 400 }}
      >
        <ContainerTitle>Thor - Vikings</ContainerTitle>
        <ContainerDescription>
          Garth Ennis e sua violência{"\n"} atacam novamente na HQ que{"\n"}{" "}
          leva a violência das histórias de{"\n"} Thor ao limite!
        </ContainerDescription>
        <ContainerDetails>Ver Detalhes</ContainerDetails>
      </ContainerVisual>
      <Image
        source={require("@assets/comicscontainer4.png")}
        style={{ marginTop: 40 }}
      />
      <ContainerVisual
        colors={["transparent", "#f00"]}
        start={{ x: 3, y: 3 }}
        end={{ x: 0, y: 0 }}
        style={{ marginTop: 400, marginLeft: 220 }}
      >
        <ContainerTitle>Em busca do Poder</ContainerTitle>
        <ContainerDescription>
          Para satisfazer os desejos de sua{"\n"} amada Morte e provar o seu
          amor,{"\n"}
          Thanos vai em busca das 6 joias{"\n"} do infinito a fim de matar
          metade{"\n"} da humanidade.
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
            marginTop: 440,
            marginLeft: 300,
            position: "absolute",
            zIndex: 5,
          }}
          onPress={props.onPress}
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
export default ComicsContainer;
