import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [result, setResult] = useState();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>İsim</Text>
      <Text>Merhaba {result}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="İsim"
        onChangeText={setName}
      ></TextInput>

      <Text>Soyisim</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Soyisim"
        onChangeText={setLastName}
      ></TextInput>

      <Pressable
        onPress={() => setResult(name + " " + lastName)}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "grey" : "blue" },

          styles.pressButton,
        ]}
      >
        <Text>Kaydol</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 3,
    width: "80%",
    borderRadius: 15,
    marginVertical: "10",
    color: "blue",
    fontWeight: "bold",
  },
  pressButton: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
