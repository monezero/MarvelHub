import { SafeAreaView } from "react-native-safe-area-context";
import {
  Container,
  TextTitle,
  ContainerMarvelMini,
  LogoMini,
  TextDescription,
  TextMini,
  TextCharacterName,
  ViewContainerMarvel,
  ViewLogoMarvel,
  ViewTopChar,
  ViewFlatlist,
  ViewDescription,
  ViewTextMini,
  ViewApparitions,
  ViewCharacters,
  ViewCharactersBanner,
  ViewCharactersName,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { StatusBar, View } from "react-native";
import { FlatlistHeros } from "@components/FlatlistHeros";
import { HqsBanner } from "@components/BannerHqs";
import { AppRoutes } from "@routes/app.routes";
import { CreatorsSquares } from "@components/SquareCreators";
import { FlatlistHqs } from "@components/FlatlistHqs";
export function Comics() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();
  function handleLogout() {
    navigation.navigate("signIn");
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          flexDirection: "row",
        }}
      >
        <Ionicons name="menu" size={36} color="red" onPress={handleLogout} />

        <View
          style={{
            marginLeft: 250,
            marginTop: 10,
          }}
        >
          <ContainerMarvelMini>
            <LogoMini>MARVEL</LogoMini>
          </ContainerMarvelMini>
        </View>
      </View>
      <Container>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <TextTitle
            style={{
              marginRight: 118,
            }}
          >
            Top 10 - HQs Populares
          </TextTitle>
        </View>
        <View
          style={{
            alignItems: "center",
            width: "50%",
          }}
        >
          <FlatlistHqs />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            marginTop: 20,
          }}
        >
          <TextDescription>
            O único oponente do Devorador de Mundos é o herói que ele aprisionou
            na Terra: o Surfista Prateado...{" "}
          </TextDescription>
        </View>
        <View
          style={{
            marginRight: 225,
          }}
        >
          <TextMini>ver mais</TextMini>
        </View>
        <View
          style={{
            marginRight: 235,
            marginTop: 40,
          }}
        >
          <TextTitle>Criadores:</TextTitle>
        </View>
        <View
          style={{
            marginRight: 180,
          }}
        >
          <CreatorsSquares />
        </View>

        <View
          style={{
            flexDirection: "row",

            marginTop: 50,
          }}
        >
          <View style={{ flex: 1, marginLeft: 22 }}>
            <TextTitle>Quadrinhos</TextTitle>
          </View>
          <View style={{ marginRight: 43 }}>
            <TextTitle>+ Ver todos</TextTitle>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "70%",
            marginTop: 30,
          }}
        >
          <HqsBanner />
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 25,
            marginTop: 6,
          }}
        >
          <TextCharacterName style={{ flex: 1, marginLeft: 50 }}>
            Em busca do poder
          </TextCharacterName>
          <TextCharacterName style={{ marginRight: 36 }}>
            Wolverine - Origens
          </TextCharacterName>
        </View>
      </Container>
    </SafeAreaView>
  );
}