import { SignIn } from "@screens/SignIn";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { Loading } from "@components/Loading/index";
import { Routes } from "@routes/index";
import { Characters } from "@screens/Characters";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "marvel-regular-DJ83": require("@fonts/marvel-regular-Dj83.ttf"),
    "axiforma-bold": require("@fonts/axiforma-bold.otf"),
    "axiforma-book": require("@fonts/axiforma-book.otf"),
    "axiforma-light": require("@fonts/axiforma-light.otf"),
    "axiforma-regular": require("@fonts/axiforma-regular.otf"),
    "axiforma-thin": require("@fonts/axiforma-thin.otf"),
    "axiforma-medium": require("@fonts/axiforma-medium.otf"),
    "clarika-geometric-bold": require("@fonts/clarika-geometric-bold.ttf"),
    "clarika-geometric-regular": require("@fonts/clarika-geometric-regular.ttf"),
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
