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
import { CreatorsSquares } from "@components/SquareCreators";
import { FlatlistHqs } from "@components/FlatlistHqs";
export function Comics() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();
  function handleLogout() {
    navigation.navigate("signIn");
  }
  function handleSeeAll() {
    navigation.navigate("allComics");
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
          <ContainerRight>
            <ContainerMarvelMini>
              <LogoMini>MARVEL</LogoMini>
            </ContainerMarvelMini>
          </ContainerRight>
          {isMenu && (
            <Menu
              onPressLogout={() => navigation.navigate("signIn")}
              onPress={() => setIsMenu(false)}
            />
          )}
        </ContainerIcons>
        <ContainerCentralize>
          <TextTitle>Top 10 - HQs Populares</TextTitle>
          <FlatlistHqs />
          <TextDescription>
            O único oponente do Devorador de{"\n"} Mundos é o herói que ele
            aprisionou na{"\n"} Terra: o Surfista Prateado...
          </TextDescription>
          <TextMini>ver mais</TextMini>
          <TextTitle style={{ alignSelf: "flex-start", marginLeft: 76 }}>
            Criadores:
          </TextTitle>
          <CreatorsSquares />
          <ContainerRow>
            <TextTitle>Quadrinhos</TextTitle>
            <TextTitle style={{ marginLeft: 91.5 }} onPress={handleSeeAll}>
              + Ver todos
            </TextTitle>
          </ContainerRow>
          <HqsBanner />
          <ContainerRow>
            <TextCharacterName style={{ marginLeft: 6 }}>
              Em busca de poder
            </TextCharacterName>
            <TextCharacterName style={{ marginLeft: 50 }}>
              Wolverine - Origens
            </TextCharacterName>
          </ContainerRow>
        </ContainerCentralize>
      </Container>
    </SafeAreaView>
  );
}

export default Comics;
