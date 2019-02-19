import React, { Component } from "react";
import { Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Inicio extends Component {
  render() {
    return (
      <View style={{ margin: 10, flex: 1, textAlign: "center" }}>
        <Text>Bem vindo ao App!</Text>
      </View>
    );
  }
}
