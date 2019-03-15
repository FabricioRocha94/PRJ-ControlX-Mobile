import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, ThemeProvider, Input, Header, HeaderIcon, HeaderProps, HeaderSubComponent } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
  render() {
    return (
      

      <View style={{ margin: 10, flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch', }}>
       
        <Input
          placeholder='Login'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
          style={{ padding: 50, flex: 1}}
        />

        <Input
          placeholder='Senha'
          leftIcon={
            <Icon
              name='key'
              size={24}
              color='black'
            />
          }
          style={{ padding: 50, flex: 1}}
        />
        <Text></Text>
        <Button
          style={{ flex: 1, width: 50, marginTop: 50, padding: 50, marginStart: 0}}
          title="Entrar"
          type="solid"
          onPress={() => {
            Actions.inicio();
          }}
        />
      </View>
    );
  }
}
