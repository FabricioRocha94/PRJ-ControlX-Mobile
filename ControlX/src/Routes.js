import React from "react";
import { Router, Scene, Stack, Drawer } from "react-native-router-flux";

import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Tela from "./components/Tela";
import AddProduct from "./components/AddProdcut";
import Camera from "./components/Camera";

// drawer




export default props => (
  <Router>
    <Stack key="root">
      <Scene key="inicio" component={Inicio} hideNavBar hideTabBar />
      <Scene key="login" component={Login} initial title="Login" hideNavBar />
      <Scene key="tela" component={Tela} title="Lista"/>
      <Scene key="addP" component={AddProduct} title="Adicionar"/>
      <Scene key="camera" component={Camera} title="Camera"  />
    </Stack>
  </Router>
);

