import { View, Text, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

export default function login() {
  const [Username, setName] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <View>
      <Text>Username:</Text>
      <TextInput
        style={{ padding: 1, borderWidth: 1, borderColor: "blue" }}
        value={Username}
        onChangeText={(text) => setName(text)}
      />
      <Text>Password:</Text>
      <TextInput
        style={{ padding: 1, borderWidth: 1, borderColor: "blue" }}
        value={Password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button
        title="Press me"
        onPress={() => console.log('O Usuário é: ' + Username + ' ' + 'e a senha é: ' + Password)}
      />
    </View>
  );
}
