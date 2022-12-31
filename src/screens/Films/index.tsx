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
import { FilmBanner } from "@components/BannerFilms";
import { ApparitionSquares } from "@components/SquareApparitions";
import { AppRoutes } from "@routes/app.routes";
import { FlatlistMovies } from "@components/FlatlistMovies";
import { CharactersSquares } from "@components/SquareCharacters";
export function Films() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();
  // function handleLogout() {
  //   navigation.navigate("signIn");
  // }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          flexDirection: "row",
        }}
      >
        <Ionicons name="menu" size={36} color="red" />

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
              marginRight: 58,
            }}
          >
            Top 10 - Filmes Populares
          </TextTitle>
        </View>
        <View
          style={{
            alignItems: "center",
            width: "50%",
          }}
        >
          <FlatlistMovies />
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
            Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu
            inimigo mais poderoso, o maligno Thanos.{" "}
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
            marginLeft: 28,
            marginTop: 40,
          }}
        >
          <TextTitle
            style={{
              marginLeft: 5,
            }}
          >
            Personagens:
          </TextTitle>
          <View
            style={{
              marginLeft: 5,
            }}
          >
            <CharactersSquares />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              marginTop: 50,
            }}
          >
            <TextTitle
              style={{
                marginLeft: 5,
              }}
            >
              Filmes
            </TextTitle>
            <TextTitle
              style={{
                marginLeft: 145,
              }}
            >
              + Ver todos
            </TextTitle>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              marginTop: 30,
            }}
          >
            <FilmBanner />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 25,
              marginTop: 6,
            }}
          >
            <TextCharacterName style={{ marginLeft: 35 }}>
              Thor
            </TextCharacterName>
            <TextCharacterName style={{ marginLeft: 80 }}>
              Vingadores - Ultimato
            </TextCharacterName>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
}
