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
  ContainerIcons,
  ContainerRight,
  ContainerCentralize,
  ContainerRow,
} from "./styles";
import { Menu } from "@components/Menu";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { StatusBar, View } from "react-native";
import { FlatlistHeros } from "@components/FlatlistHeros";
import { CharacterBanner } from "@components/BannerHeroes";
import { ApparitionSquares } from "@components/SquareApparitions";
import { AppRoutes } from "@routes/app.routes";
import { useState } from "react";
import { HqsBanner } from "@components/BannerHqs";
import { HeroesBanner } from "@components/BannerHeroes/styles";
import { FlatlistMovies } from "@components/FlatlistMovies";
import { CharactersSquares } from "@components/SquareCharacters";
import { FilmBanner } from "@components/BannerFilms";
export function Films() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();
  function handleLogout() {
    navigation.navigate("signIn");
  }
  function handleSeeAll() {
    navigation.navigate("allMovies");
  }

  const [isMenu, setIsMenu] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <Container>
        <ContainerIcons>
          <Ionicons
            name="menu"
            size={36}
            color="red"
            onPress={() => {
              setIsMenu(true);
            }}
          />
          {isMenu && (
            <Menu
              onPressLogout={() => navigation.navigate("signIn")}
              onPress={() => setIsMenu(false)}
            />
          )}
          <ContainerRight>
            <ContainerMarvelMini>
              <LogoMini>MARVEL</LogoMini>
            </ContainerMarvelMini>
          </ContainerRight>
        </ContainerIcons>
        <ContainerCentralize>
          <TextTitle>Top 10 - Filmes Populares</TextTitle>
          <FlatlistMovies />
          <TextDescription>
            Homem de Ferro, Thor, Hulk e os{"\n"} Vingadores se unem para
            combater seu{"\n"}
            inimigo mais poderoso, o maligno Thanos.
          </TextDescription>
          <TextMini>ver mais</TextMini>
          <TextTitle style={{ alignSelf: "flex-start", marginLeft: 76 }}>
            Personagens:
          </TextTitle>
          <CharactersSquares />
          <ContainerRow>
            <TextTitle>Filmes</TextTitle>
            <TextTitle style={{ marginLeft: 139.8 }} onPress={handleSeeAll}>
              + Ver todos
            </TextTitle>
          </ContainerRow>
          <FilmBanner />
          <ContainerRow>
            <TextCharacterName style={{ marginLeft: 50 }}>
              Thor
            </TextCharacterName>
            <TextCharacterName style={{ marginLeft: 74 }}>
              Vingadores - Ultimato
            </TextCharacterName>
          </ContainerRow>
        </ContainerCentralize>
      </Container>
    </SafeAreaView>
  );
}

export default Films;
