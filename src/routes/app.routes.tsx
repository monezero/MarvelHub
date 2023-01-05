import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Characters } from "@screens/Characters";
import { Films } from "@screens/Films";
import { Comics } from "@screens/Comics";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type AppRoutes = {
  characters: undefined;
  comics: undefined;
  films: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          width: 250,
          height: 40,
          top: 500,
          bottom: 0,
          left: 0,
          right: 0,

          elevation: 0,
          borderTopColor: "#f00",
          borderBottomColor: "#f00",
          borderRightColor: "#f00",
          borderLeftColor: "#f00",
          shadowColor: "#f00",
          backgroundColor: "#f00",
          borderRadius: 30,

          overflow: "hidden",

          transform: [
            { rotateZ: "90deg" },
            { translateY: 100 },
            { translateX: -30 },
          ],
        },
      }}
    >
      <Screen
        name="characters"
        component={Characters}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                left: 1,
              }}
            >
              <Text
                style={{
                  fontFamily: "axiforma-medium",
                  fontSize: 10,
                  color: focused ? "#fff" : "#800000",
                }}
              >
                Personagens
              </Text>
            </View>
          ),
        }}
      />
      <Screen
        name="films"
        component={Films}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Text
                style={{
                  fontFamily: "axiforma-medium",
                  fontSize: 10,
                  color: focused ? "#fff" : "#800000",
                }}
              >
                Filmes
              </Text>
            </View>
          ),
        }}
      />
      <Screen
        name="comics"
        component={Comics}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Text
                style={{
                  fontFamily: "axiforma-medium",
                  fontSize: 10,
                  color: focused ? "#fff" : "#800000",
                }}
              >
                Quadrinhos
              </Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
}
