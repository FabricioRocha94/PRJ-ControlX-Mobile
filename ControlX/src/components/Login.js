import React, { Component } from "react";
import { TextInput, Text, Button, View } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  render() {
    return (
      <View style={{ margin: 10, flex: 1, textAlign: "center" }}>
        <Text style={{ textAlign: "center" }}>Login</Text>
        <TextInput
          style={{
            margin: 10,
            height: 40,
            borderColor: "black",
            borderWidth: 1
          }}
        />
        <Text style={{ textAlign: "center" }}>Senha</Text>
        <TextInput
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
