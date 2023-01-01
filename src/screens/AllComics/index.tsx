import {
  ContainerMarvelMini,
  Container,
  TextTitle,
  LogoMini,
  ContainerMenu,
  ContainerMenuVisual,
  ImageMenu,
  TextMenu,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { ComicsContainer } from "@components/ContainerComics";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRouteProps } from "@routes/auth.routes";
import { useState } from "react";
export function AllComics() {
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
        {isMenu && (
          <Menu
            onPressLogout={() => navigation.navigate("signIn")}
            onPress={() => setIsMenu(false)}
          />
        )}

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
        <FontAwesome5 name="book-open" size={30} color="#f00" />
        <TextTitle>HQs</TextTitle>
      </View>
      <ComicsContainer />
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

interface Props {
  onPress: () => void;
  onPressLogout: () => void;
}

const Menu = (props: Props) => {
  return (
    <ContainerMenu>
      <ContainerMenuVisual>
        <ImageMenu source={require("@assets/profile.png")} />
        <TextMenu>Perfil</TextMenu>
        <TextMenu style={{ marginTop: 4 }}>Configurações</TextMenu>
        <TextMenu style={{ marginTop: 2 }}>Visite nosso site</TextMenu>
        <TextMenu style={{ marginTop: 0 }} onPress={props.onPressLogout}>
          Sair
        </TextMenu>
      </ContainerMenuVisual>
    </ContainerMenu>
  );
};

export default AllComics;
