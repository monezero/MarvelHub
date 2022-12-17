import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CheckBox() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
      />
      <Text style={styles.paragraph}>
        Salvar dados de login entre automaticamente
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 8,
    fontFamily: "clarika-geometric-bold",
    color: "#FFF",
  },
  checkbox: {
    margin: 8,

    color: "#F00000",
  },
});
