import React, { Component } from "react";
import { Text, ScrollView, View, Picker } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, Input } from 'react-native-elements';


export default class Inicio extends Component {
    state = {user: ''}
  render() {
    return (
      <View style={{ margin: 10, flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch', }}>
        <View>
            <Input placeholder='ID'/>
            <Input placeholder='Nome'/>
            <Input placeholder='Quantidade'/>
            <Input placeholder='Fornecedor'/>

            <Picker
                selectedValue={this.state.user}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item label="Categoria" value="null" />
                <Picker.Item label="Comestiveis" value="comestiveis" />
                <Picker.Item label="Doces" value="doces" />
                <Picker.Item label="Varejo" value="varejo" />
            </Picker>

            <Button
                style={{ flex: 1, width: 50, marginTop: 50, padding: 50, marginStart: 0}}
                title="Enviar"
                type="solid"
            />
        </View>


        
        
        
      </View>
    );
  }
}
