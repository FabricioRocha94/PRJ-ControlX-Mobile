import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
import { Card, Button, ThemeProvider, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';


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

export default class Inicio extends Component {
  constructor(props){
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {

    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
    ? Dimensions.get("window").height
    : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");


    return (
      <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#a01601" barStyle="light-content"/>
      <ScrollView  contentContainerStyle={{ }}>
        <View style={{ flex: 1, backgroundColor: '#a01601', height: 50, flexDirection: 'row'  }}>
          <Icon
            name="bars"
            color="white"
            size={25}
            style={{ marginTop: 10, marginLeft: 20 }}
            onPress={this._toggleModal}
          />

          <Text style={{ marginTop: 12, marginLeft: 20, color: 'white' }}>ControlX</Text>  
        </View>

        <View>
          <Modal 
            isVisible={this.state.isModalVisible}  
            onBackdropPress={() => this.setState({ isModalVisible: false })} 
            onSwipeComplete={() => this.setState({ isModalVisible: false })}
            deviceHeight={deviceHeight}
            animationIn = {'fadeInLeft'}
            animationOut = {'fadeOutLeft'}
            style={{ flex: 1, height: 900, marginLeft: -20, marginTop: 0, marginEnd: 0, marginBottom: 0 }}
          >
            <View style={{ flex: 1, backgroundColor: '#a01601', height: (deviceHeight), width: 250, marginLeft: 0 }} linearGradientProps={{
                colors: ['#751102', '#A72F1D'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}>

              <ListItem
                leftAvatar={{ source: { uri: 'http://i.imgur.com/YdhUZdZ.png' } }}
                title={'ControlX'}
                subtitle={'Profile'}
                style={{ marginLeft: 10, marginTop: 0, marginEnd: 0, marginBottom: 0 }}
              />
              
              <TouchableOpacity onPress={() => {                   
                                  this.setState({ isModalVisible: !this.state.isModalVisible })           
                                  Actions.tela({ tipo : 'produtos' })
                                }}
                style={styles.menuTouch}>
                <Icon
                  name="sticky-note"
                  color="white"
                  size={15}
                  style={{ marginTop: 10, marginLeft: 20 }}
                />
                <Text style = {styles.menu}> Listar Produtos</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {                   
                                  this.setState({ isModalVisible: !this.state.isModalVisible })           
                                  Actions.tela({ tipo : 'fornecedor' })
                                }}
                style={styles.menuTouch}>
                <Icon
                  name="sticky-note"
                  color="white"
                  size={15}
                  style={{ marginTop: 10, marginLeft: 20 }}
                />
                <Text style = {styles.menu}> Listar Fornecedores</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {                   
                                  this.setState({ isModalVisible: !this.state.isModalVisible })           
                                  Actions.tela({ tipo : 'categoria' })
                                }}
               style={styles.menuTouch}>
                <Icon
                  name="sticky-note"
                  color="white"
                  size={15}
                  style={{ marginTop: 10, marginLeft: 20 }}
                />
                <Text style = {styles.menu}> Listar Categorias </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {                   
                                  this.setState({ isModalVisible: !this.state.isModalVisible })           
                                  Actions.camera({ tipo : 'produtos', editProd: { edit : false }, cam: false })
                                }}
               style={styles.menuTouch}>
                <Icon
                  name="plus"
                  color="white"
                  size={15}
                  style={{ marginTop: 10, marginLeft: 20 }}
                />
                <Text style = {styles.menu}> Adicionar Produtos </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {                   
                                  this.setState({ isModalVisible: !this.state.isModalVisible })           
                                  Actions.addF({ tipo : 'fornecedor', editFor: { edit : false } })
                                }}
               style={styles.menuTouch}>
                <Icon
                  name="plus"
                  color="white"
                  size={15}
                  style={{ marginTop: 10, marginLeft: 20 }}
                />
                <Text style = {styles.menu}> Adicionar Fornecedores </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {                   
                                  this.setState({ isModalVisible: !this.state.isModalVisible })           
                                  Actions.addC({ tipo : 'categoria', editCat: { edit : false } })
                                }}
               style={styles.menuTouch}>
                <Icon
                  name="plus"
                  color="white"
                  size={15}
                  style={{ marginTop: 10, marginLeft: 20 }}
                />
                <Text style = {styles.menu}> Adicionar Categorias </Text>
              </TouchableOpacity>

            </View>
          </Modal>


          
        </View>
        <View  style={{ flex: 1, backgroundColor: 'white', height: (deviceHeight - 50) }}>
          <Card title='Bem Vindo'>
            <Text style={{marginBottom: 10}}>
              Clique para procurar por codigo de barras.
            </Text>
            <Button
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors: ['#751102', '#A72F1D'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              icon={<Icon name='camera' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#E2474B' }}
              title='Abrir camera'
              onPress={() => {
                Actions.camera({ buscar: true });
              }} />
          </Card>
        </View>
      </ScrollView>
      </ThemeProvider>
    );
    
  }
}


const styles = StyleSheet.create({
  menu: {
    color: 'white',
    marginTop: 7,
    fontSize: 15
  },
  menuTouch: {
    marginLeft: 25,
    flexDirection: 'row',
    marginTop: 20
  },
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