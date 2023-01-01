import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { Characters } from "@screens/Characters";
import { AppRoutes } from "./app.routes";
import Comics from "@screens/Comics";
import Films from "@screens/Films";
import { AllCharacters } from "@screens/AllCharacters";
import { AllMovies } from "@screens/AllMovies";
import { AllComics } from "@screens/AllComics";

type AuthRoutes = {
  signIn: undefined;
  characters: undefined;
  comics: undefined;
  films: undefined;
  login: undefined;
  allCharacters: undefined;
  allComics: undefined;
  allMovies: undefined;
};

export type AuthNavigatorRouteProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="login" component={AppRoutes} />
      <Screen name="allCharacters" component={AllCharacters} />
      <Screen name="allMovies" component={AllMovies} />
      <Screen name="allComics" component={AllComics} />

      <Screen name="characters" component={Characters} />
      <Screen name="comics" component={Comics} />
      <Screen name="films" component={Films} />
    </Navigator>
  );
}
