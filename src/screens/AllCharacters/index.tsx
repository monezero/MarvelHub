import {
  ContainerMarvelMini,
  Container,
  TextTitle,
  LogoMini,
  ContainerMenu,
  ContainerMenuVisual,
  ImageMenu,
  TextMenu,
  ContainerRight,
} from "./styles";
import { Menu } from "@components/Menu";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { CharacterContainer } from "@components/ContainerCharacters";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";

export function AllCharacters() {
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
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          flexDirection: "row",
        }}
      >
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
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          marginLeft: 25,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color="#f00"
          onPress={handleReturn}
        />
        <MaterialIcons name="people-alt" size={30} color="#f00" />
        <TextTitle>Personagens</TextTitle>
      </View>
      <CharacterContainer />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 200,
        }}
      >
        <Entypo name="dots-three-horizontal" size={30} color="#f00" />
      </View>
    </SafeAreaView>
  );
}

export default AllCharacters;
