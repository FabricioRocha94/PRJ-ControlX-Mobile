import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, ThemeProvider, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Arroz',
    avatar_url: 'http://www.sacoplasticosp.com.br/imagens/produtos/alimentos/saco-arroz-01.jpg',
    subtitle: 'R$50,00 - Qtd: 15'
  },
  {
    name: 'Macarrão',
    avatar_url: 'https://www.paodeacucar.com/img/uploads/1/43/472043.jpg',
    subtitle: 'R$15,00 - Qtd: 15'
  },
  {
    name: 'Arroz',
    avatar_url: 'http://www.sacoplasticosp.com.br/imagens/produtos/alimentos/saco-arroz-01.jpg',
    subtitle: 'R$50,00 - Qtd: 15'
  },
  {
    name: 'Macarrão',
    avatar_url: 'https://www.paodeacucar.com/img/uploads/1/43/472043.jpg',
    subtitle: 'R$15,00 - Qtd: 15'
  },
  {
    name: 'Arroz',
    avatar_url: 'http://www.sacoplasticosp.com.br/imagens/produtos/alimentos/saco-arroz-01.jpg',
    subtitle: 'R$50,00 - Qtd: 15'
  },
  {
    name: 'Macarrão',
    avatar_url: 'https://www.paodeacucar.com/img/uploads/1/43/472043.jpg',
    subtitle: 'R$15,00 - Qtd: 15'
  },
  {
    name: 'Arroz',
    avatar_url: 'http://www.sacoplasticosp.com.br/imagens/produtos/alimentos/saco-arroz-01.jpg',
    subtitle: 'R$50,00 - Qtd: 15'
  },
  {
    name: 'Macarrão',
    avatar_url: 'https://www.paodeacucar.com/img/uploads/1/43/472043.jpg',
    subtitle: 'R$15,00 - Qtd: 15'
  },
  {
    name: 'Arroz',
    avatar_url: 'http://www.sacoplasticosp.com.br/imagens/produtos/alimentos/saco-arroz-01.jpg',
    subtitle: 'R$50,00 - Qtd: 15'
  },
  {
    name: 'Macarrão',
    avatar_url: 'https://www.paodeacucar.com/img/uploads/1/43/472043.jpg',
    subtitle: 'R$15,00 - Qtd: 15'
  },{
    name: 'Arroz',
    avatar_url: 'http://www.sacoplasticosp.com.br/imagens/produtos/alimentos/saco-arroz-01.jpg',
    subtitle: 'R$50,00 - Qtd: 15'
  },
  {
    name: 'Macarrão',
    avatar_url: 'https://www.paodeacucar.com/img/uploads/1/43/472043.jpg',
    subtitle: 'R$15,00 - Qtd: 15'
  }
]




export default class Inicio extends Component {
  render() {
    return (
      <ScrollView>
        
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
          
        }
        
      </ScrollView>
    );
  }
}
