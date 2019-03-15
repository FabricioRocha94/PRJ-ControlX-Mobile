import React, { Component } from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { Card, Button, ButtonGroup, Header, HeaderIcon, HeaderProps, HeaderSubComponent, colors, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const Estilos = {
    text1: {
      fontSize: 30,
      margin: 10, 
      flex: 1, 
      textAlign: "center",
      height: 50
  }
};

const theme = {
  Text: {
    containerStyle: [
      {
        height: 10
      }
    ]
  },

  Header: {
    containerStyle2 : [
      {
        height: 20
      }
      
    ]
  }
}

const users = [
  {
     name: 'Gustavo Nunes',
     avatar: 'https://scontent.fqsc1-1.fna.fbcdn.net/v/t1.0-9/37340846_1989970671037289_7785475973234819072_n.jpg?_nc_cat=106&_nc_ht=scontent.fqsc1-1.fna&oh=9a9c30edd704e1dcf55c2ecfb79128c8&oe=5D2394D0'
  }
 ]


export default class Inicio extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <View style={{ flex: 3, backgroundColor: 'white' }}>
        <View style={{ flex: 1, backgroundColor: 'white', height: 200 }}>
          <Header
              style={{height: 200}}
              placement="left"
              leftComponent={{ icon: 'menu', color: '#fff', marginBottom: 60 }}
              centerComponent={{ text: 'ControlX.', style: { color: '#fff', marginBottom: 60 } }}
              rightComponent={{  }}
            />
        </View>

        <View style={{ flex: 10, backgroundColor: 'white', height: 200 }}>
          <Card
            title='Bem Vindo'>
            <Text style={{marginBottom: 10}}>
              Essa é a tela principal, aqui você recebera noticias de atualizações do seu estoque em geral.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Ver estoque'
              onPress={() => {
                Actions.tela();
              }} />
          </Card>
        </View>
          
          

          
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', marginBottom: 0, backgroundColor: '#03A9F4', height: 100 }}>
          <Button
            
            icon={
              <Icon
                light
                raised={true}
                type='medium'
                name="th-list"
                size={35}
                color="white"
                
              />
            }
            iconRight
            title=""
            onPress={() => {
              Actions.tela();
            }}
            type="Clear"
          />
          <Button
            
            icon={
              <Icon
                name="clipboard"
                size={35}
                color="white"
              />
            }
            iconRight
            title=""
            type="Clear"
            onPress={() => {
              Actions.addP();
            }}
          />
        </View>
      </View>
      </ThemeProvider>
    );
    
  }
}
