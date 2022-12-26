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

export function ComicsContainer() {
  return (
    <View>
      <Container>
        <Image source={require("@assets/comicscontainer.png")} />
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
          O único oponente do Devorador{"\n"} de Mundos é o herói que ele{"\n"}{" "}
          aprisionou na Terra: o Surfista{"\n"} Prateado.
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
            marginLeft: 80,
            marginTop: 140,
          }}
        >
          Parábola
        </ContainerTitle>

        <Image source={require("@assets/comicscontainer2.png")} />
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
          Wolverine - Origem
        </ContainerTitle>
        <ContainerDescription
          style={{
            marginLeft: 228,
            marginTop: 170,
          }}
        >
          Origem é uma minissérie em{"\n"} quadrinhos publicada pela Marvel
          {"\n"} Comics em seis edições, entre 2001{"\n"} e 2002
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
        <Image source={require("@assets/hqs3.png")} />
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
            marginLeft: 60,
            marginTop: 140,
          }}
        >
          Thor - Vikings
        </ContainerTitle>
        <ContainerDescription
          style={{
            marginLeft: 50,
            marginTop: 170,
          }}
        >
          Garth Ennis e sua violência{"\n"} atacam novamente na HQ que{"\n"}{" "}
          leva a violência das histórias de{"\n"} Thor ao limite!
        </ContainerDescription>
        <ContainerDetails
          style={{
            marginLeft: 72,
            marginTop: 216,
          }}
        >
          Ver detalhes
        </ContainerDetails>
        <Image source={require("@assets/comicscontainer4.png")} />
        <ContainerVisual
          colors={["transparent", "#f00"]}
          start={{ x: 3, y: 3 }}
          end={{ x: 0, y: 0 }}
          style={{ marginLeft: 220 }}
        ></ContainerVisual>

        <ContainerTitle style={{ marginLeft: 246, marginTop: 142 }}>
          Em Busca do Poder
        </ContainerTitle>
        <ContainerDescription style={{ marginLeft: 236, marginTop: 172 }}>
          Para satisfazer os desejos de sua{"\n"} amada Morte e provar o seu
          amor,{"\n"} Thanos vai em busca das 6 joias{"\n"} do infinito a fim de
          matar metade{"\n"} da humanidade.
        </ContainerDescription>
        <ContainerDetails style={{ marginLeft: 260, marginTop: 218 }}>
          Ver detalhes
        </ContainerDetails>
      </ContainerBottom>
    </View>
  );
}
