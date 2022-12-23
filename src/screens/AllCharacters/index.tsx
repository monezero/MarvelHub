import { ContainerMarvelMini, Container, TextTitle, LogoMini } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { CharacterContainer } from "@components/ContainerCharacters";

export function AllCharacters() {
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
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          marginLeft: 25,
        }}
      >
        <AntDesign name="arrowleft" size={30} color="#f00" />
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
