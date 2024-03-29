import {
  ContainerMarvelMini,
  Container,
  TextTitle,
  LogoMini,
  ContainerMenu,
  ContainerRight,
  ContainerTop,
  ContainerLeftTop,
  ContainerRow,
  ContainerCenter,
} from "./styles";
import { Menu } from "@components/Menu";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { ComicsContainer } from "@components/ContainerComics";
import { MoviesContainer } from "@components/ContainerMovies";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { useState } from "react";
export function AllMovies() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();
  function handleLogout() {
    navigation.navigate("signIn");
  }
  function handleReturn() {
    navigation.navigate("login");
  }
  const [isMenu, setIsMenu] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ContainerTop>
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
            onPress={() => setIsMenu(false)}
            onPressLogout={() => navigation.navigate("signIn")}
          />
        )}
      </ContainerTop>
      <ContainerRow>
        <AntDesign
          name="arrowleft"
          size={30}
          color="#f00"
          onPress={handleReturn}
        />
        <MaterialIcons name="local-movies" size={30} color="red" />
        <TextTitle>Filmes</TextTitle>
      </ContainerRow>
      <MoviesContainer />
      <ContainerCenter>
        <Entypo name="dots-three-horizontal" size={30} color="#f00" />
      </ContainerCenter>
    </SafeAreaView>
  );
}

export default AllMovies;
