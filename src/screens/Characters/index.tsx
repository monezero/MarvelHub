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
import { CharactersBanner } from "@components/CharactersBanner";
import { ImagesBanner } from "@components/ImagesBanner";
import { AppRoutes } from "@routes/app.routes";
export function Characters() {
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
          <TextTitle>Top 10 - Personagens Populares</TextTitle>
        </View>
        <View
          style={{
            alignItems: "center",
            width: "50%",
          }}
        >
          <FlatlistHeros />
        </View>
        <View
          style={{
            alignItems: "center",
            width: "70%",
            marginTop: 20,
          }}
        >
          <TextDescription>
            Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha
            Wundagore, base do Alto Evolucionário.{" "}
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
            marginLeft: 20,
            marginTop: 40,
          }}
        >
          <TextTitle>Aparições:</TextTitle>
          <ImagesBanner />
          <View
            style={{
              flexDirection: "row",
              width: "70%",
              marginTop: 50,
            }}
          >
            <TextTitle>Personagens</TextTitle>
            <TextTitle
              style={{
                marginLeft: 85,
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
            <CharactersBanner />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 25,
              marginTop: 6,
            }}
          >
            <TextCharacterName>Homem Aranha</TextCharacterName>
            <TextCharacterName style={{ marginLeft: 105 }}>
              Hulk
            </TextCharacterName>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
}
