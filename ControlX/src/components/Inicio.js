import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
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

const users = fetch('https://gnunes.com.br/controlx/', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    listar: 'Produto'
  }),
});


export default class Inicio extends Component {
  constructor(props){
    super(props);

  }


  render() {
    return (
      <ThemeProvider theme={theme}>
      <ScrollView  contentContainerStyle={{ }}>
        <View style={{ flex: 1, backgroundColor: 'white', height: 50 }}>
          <Header
              style={{height: 200, backgroundColor: '#03A9F4'}}
              placement="left"
              leftComponent={{ icon: 'home', color: '#fff', marginBottom: 60 }}
              centerComponent={{ text: 'ControlX.', style: { color: '#fff', marginBottom: 60 } }}
              rightComponent={{  }}
            />
        </View>

        <View style={{ flex: 1, backgroundColor: 'white', height: 260 }}>
          <Card title='Bem Vindo'>
            <Text style={{marginBottom: 10}}>
              Clique para procurar por codigo de barras.
            </Text>
            <Button
              icon={<Icon name='camera' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Abrir camera'
              onPress={() => {
                Actions.camera();
              }} />
          </Card>
        </View>

        <View style={{ backgroundColor: 'white', height: 500}}>
          <View style={styles.alinar_centro}>

            <Text style={{marginTop: 10,marginBottom:10, marginLeft: 10}}>Produtos</Text>
            <View style={styles.alinhar_row }>
              <View style={styles.btnEscola}>
                <Button
                  title="Listar"
                  type="outline"
                  onPress={() => {
                    Actions.tela({ tipo : 'produtos' });
                  }}
                />
              </View>
              <View style={styles.btnEscola}>
                <Button
                  
                  title="Adicionar"
                  type="outline"
                  onPress={() => {
                    Actions.addP({ tipo : 'produtos' });
                  }}
                />
              </View>
            </View>

          </View>

          <View style={styles.alinar_centro}>
            <Text style={{marginTop: 10,marginBottom:10, marginLeft: 10}}>Fornecedores</Text>
            <View style={styles.alinhar_row }>
              <View style={styles.btnEscola}>
                <Button
                  title="Listar"
                  type="outline"
                  onPress={() => {
                    Actions.tela({ tipo : 'fornecedor' });
                  }}
                />
              </View>
              <View style={styles.btnEscola}>
                <Button
                  
                  title="Adicionar"
                  type="outline"
                  onPress={() => {
                    Actions.addP({ tipo : 'fornecedor' });
                  }}
                />
              </View>
            </View>
            
          </View>

          <View style={styles.alinar_centro}>
            <Text style={{marginTop: 10,marginBottom:10, marginLeft: 10}}>Categoria</Text>
            <View style={styles.alinhar_row }>
              <View style={styles.btnEscola}>
                <Button
                  title="Listar"
                  type="outline"
                  onPress={() => {
                    Actions.tela({ tipo : 'categoria' });
                  }}
                />
              </View>
              <View style={styles.btnEscola}>
                <Button
                  
                  title="Adicionar"
                  type="outline"
                  onPress={() => {
                    Actions.addP({ tipo : 'categoria' });
                  }}
                />
              </View>
            </View>
            
          </View>
        </View>
      </ScrollView>
      </ThemeProvider>
    );
    
  }
}


const styles = StyleSheet.create({
  btnEscola: {
    width: 150,
    marginLeft: 10,
    marginRight: 10
  },
  alinhar_row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  alinar_centro: {
    justifyContent: 'center'
  }
});