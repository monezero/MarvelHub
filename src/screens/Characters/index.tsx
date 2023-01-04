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
export function Characters() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();
  function handleLogout() {
    navigation.navigate("signIn");
  }
  function handleSeeAll() {
    navigation.navigate("allCharacters");
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
        </ContainerIcons>
        <ContainerCentralize>
          <TextTitle>Top 10 - Personagens Populares</TextTitle>
          <FlatlistHeros />

          <TextDescription>
            Wanda Maximoff foi sequestrada da{"\n"} Sérvia e trazida para a
            Montanha{"\n"}
            Wundagore, base do Alto Evolucionário.
          </TextDescription>

          <TextMini>ver mais</TextMini>

          <TextTitle style={{ alignSelf: "flex-start", marginLeft: 76 }}>
            Aparições:
          </TextTitle>

          <ApparitionSquares />
          <ContainerRow>
            <TextTitle>Personagens</TextTitle>
            <TextTitle style={{ marginLeft: 80 }} onPress={handleSeeAll}>
              + Ver todos
            </TextTitle>
          </ContainerRow>
          <CharacterBanner />
          <ContainerRow>
            <TextCharacterName style={{ marginLeft: 16 }}>
              Homem-aranha
            </TextCharacterName>
            <TextCharacterName style={{ marginLeft: 100 }}>
              Hulk
            </TextCharacterName>
          </ContainerRow>
        </ContainerCentralize>
      </Container>
    </SafeAreaView>
  );
}

export default Characters;
