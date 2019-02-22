import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import Inicio from "./components/Inicio";
import Login from "./components/Login";

export default props => (
  <Router>
    <Stack key="root">
      <Scene key="inicio" component={Inicio} title="Inicio" />
      <Scene key="login" component={Login} initial title="Login" />
    </Stack>
  </Router>
);
