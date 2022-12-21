import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Characters } from "@screens/Characters";
import { Comics } from "@screens/Comics";
import Films from "@screens/Films";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type AppRoutes = {
  characters: undefined;
  comics: undefined;
  films: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator();

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
          top: 450,
          bottom: 0,
          left: 0,
          right: 0,
          marginRight: 250,
          elevation: 0,
          borderColor: "#000",
          backgroundColor: "#f00",
          borderRadius: 30,
          borderWidth: 3,
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
                Filmes
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
                Quadrinhos
              </Text>
            </View>
          ),
        }}
      />
    </Navigator>
  );
}
