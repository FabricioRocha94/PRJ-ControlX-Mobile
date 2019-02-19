import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";

import Inicio from "./src/components/Inicio";
import Login from "./src/components/Login";

export default class ControlX extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="inicio" component={Inicio} title="Inicio" />
          <Scene key="login" component={Login} initial title="Login" />
        </Stack>
      </Router>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent("ControlX", () => ControlX);
