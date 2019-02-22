import React, { Component } from "react";
import { TextInput, Text, Button, View } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  render() {
    return (
      <View style={{ margin: 10, flex: 1, textAlign: "center" }}>
        <TextInput
          placeholder="Login"
          textContentType="username"
          style={{
            margin: 10,
            height: 40,
            borderColor: "black",
            borderWidth: 1
          }}
        />
        <TextInput
          placeholder="Senha"
          textContentType="password"
          style={{
            margin: 10,
            height: 40,
            borderColor: "black",
            borderWidth: 1
          }}
        />
        <Button
          style={{ width: 50 }}
          title="Entrar"
          onPress={() => {
            Actions.inicio();
          }}
        />
      </View>
    );
  }
}
