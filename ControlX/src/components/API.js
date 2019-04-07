import React, { Component } from "react";
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform} from "react-native";

/* 

http://167.114.114.169:8080/controlx-1.0/produtos/listarTodos => GET
http://167.114.114.169:8080/controlx-1.0/produtos/cadastrar => POST
http://167.114.114.169:8080/controlx-1.0/produtos/editar => POST
http://167.114.114.169:8080/controlx-1.0/produtos/deletar/{id} => DELETE

http://167.114.114.169:8080/controlx-1.0/fornecedores/listarTodos => GET
http://167.114.114.169:8080/controlx-1.0/fornecedores/cadastrar => POST
http://167.114.114.169:8080/controlx-1.0/fornecedores/editar => POST
http://167.114.114.169:8080/controlx-1.0/fornecedores/deletar/{id} => DELETE

http://167.114.114.169:8080/controlx-1.0/categorias/listarTodas => GET
http://167.114.114.169:8080/controlx-1.0/categorias/cadastrar => POST
http://167.114.114.169:8080/controlx-1.0/categorias/editar => POST
http://167.114.114.169:8080/controlx-1.0/categorias/deletar/{id}  => DELETE

*/

  async function setProduct(params) {
      try {
        let response = await fetch('http://167.114.114.169:8080/controlx-1.0/produtos/cadastrar',
          {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(params)
          });

        let responseJson = await response.json();
        return responseJson.id;
      } catch (error) {
        //console.error(error);
      }
  }

  async function setCat(params) {
    try {
      let response = await fetch('http://167.114.114.169:8080/controlx-1.0/categorias/cadastrar',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

      let responseJson = await response.json();
      return responseJson.id;
    } catch (error) {
      //console.error(error);
    }
  }

  async function setFor(params) {
    try {
      let response = await fetch('http://167.114.114.169:8080/controlx-1.0/fornecedores/cadastrar',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

      let responseJson = await response.json();
      return responseJson.id;
    } catch (error) {
      //console.error(error);
    }
  }

  async function editCat(params) {
    try {
      let response = await fetch('http://167.114.114.169:8080/controlx-1.0/categorias/editar',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

      let responseJson = await response.json();
      return responseJson.nome;
    } catch (error) {
      //console.error(error);
    }
  }

  async function editFor(params) {
    try {
      let response = await fetch('http://167.114.114.169:8080/controlx-1.0/fornecedores/editar',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

      let responseJson = await response.json();
      return responseJson.nome;
    } catch (error) {
      //console.error(error);
    }
  }

  const fetchDelete = (url= ``, id="") => {
      let trueUrl = `${url}/${id}`;
      return fetch(trueUrl, {
          method: 'delete'
      })
      .then(res => res.json());
  };

  export{setProduct, setCat, setFor, editCat, editFor, fetchDelete};
