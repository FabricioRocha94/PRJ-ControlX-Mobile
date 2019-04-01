import React, { Component } from "react";
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform} from "react-native";

const apiGetAll = "https://gnunes.com.br/controlx/?listar=";
const apiPostInsert = "https://gnunes.com.br/controlx/";

async function setProduct(params) {
    try {
      let response = await fetch(apiPostInsert,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

      let responseJson = await response.json();
      return responseJson.status;
    } catch (error) {
      //console.error(error);
    }
  }

  export{setProduct};
