import React, { Component } from "react";
import { Text, ScrollView, View, Picker, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, Input } from 'react-native-elements';

import{ setProduct } from './API';


export default class Inicio extends Component {

  constructor (props) {
    super(props)
    this.state = {user: '', nome: '', qtd : '', fornecedor:'', cat: '', tipo_un: '', preco: '', estoque_min: '', tipo : this.props.tipo, url_foto: ''}

    this.setNome = this.setNome.bind(this)
    this.setQtd  = this.setQtd.bind(this)
    this.setFornecedor = this.setFornecedor.bind(this)
    this.setCat = this.setCat.bind(this)
    this.setTipo_un = this.setTipo_un.bind(this)
    this.setPreco = this.setPreco.bind(this)
    this.setEstoque_min = this.setEstoque_min.bind(this)
    this.setUrl_foto = this.setUrl_foto.bind(this)
  }
    
    onChangeValue = (name, value) => {
        alert(`${name}, ${value}`)
        // Set the state according to your needs here
    }

    setNome (event) {
      this.setState({ nome: event.nativeEvent.text });
    }

    setQtd (event) {
      this.setState({ qtd: event.nativeEvent.text });
    }

    setFornecedor (event) {
      this.setState({ fornecedor: event.nativeEvent.text });
    }

    setCat (event) {
      this.setState({ cat: event.nativeEvent.text });
    }

    setTipo_un (event) {
      this.setState({ tipo_un: event.nativeEvent.text });
    }

    setEstoque_min (event) {
      this.setState({ estoque_min: event.nativeEvent.text });
    }

    setPreco (event) {
      this.setState({ preco: event.nativeEvent.text });
    }

    setUrl_foto (event) {
      this.setState({ url_foto: event.nativeEvent.text });
    }



  render() {
    return (
      <ScrollView style={{ margin: 10, flex: 1 }}>

        <View>
            <Input 
              value={this.state.value}
              placeholder='Nome' 
              onChange={this.setNome}
              name={'Nome'}
            />
            <Input 
              value={this.state.value}
              placeholder='Preco' 
              onChange={this.setPreco}
              name={'Preco'}
            />
            <Input 
              value={this.state.value}
              placeholder='Estoque Minimo' 
              onChange={this.setEstoque_min}
              name={'Estoque_Minimo'}
            />
            <Input 
              value={this.state.value}
              placeholder='Tipo de Unidade: ex. Kg' 
              onChange={this.setTipo_un}
              name={'tipo_un'}
            />
            <Input 
              value={this.state.value}
              placeholder='Link da foto. ex. https://site.com.br/foto.png' 
              onChange={this.setUrl_foto}
              name={'url_foto'}
            />
            <Input 
              value={this.state.value}
              placeholder='Quantidade'
              onChange={this.setQtd}
              name={'Quantidade'}
            />
            <Input 
              value={this.state.value}
              placeholder='Fornecedor'
              onChange={this.setFornecedor}
              name={'Fornecedor'}
            />

            <Picker
              selectedValue={this.state.user}
              style={{height: 50, width: 200}}
              onValueChange={(itemValue, itemIndex) =>
                  this.setState({cat: itemValue})
              }>
              <Picker.Item label="Categoria" value="null" />
              <Picker.Item label="Mantimento" value="1" />
              <Picker.Item label="Congelados" value="2" />
            </Picker>

            <Button
                style={{ flex: 1, width: 50, marginTop: 50, padding: 50, marginStart: 0}}
                title="Enviar"
                type="solid"
                //nome: '', qtd : '', fornecedor:'', cat: '', tipo_un: '', preco: '', estoque_min: '', url_foto: ''
                onPress={() => 
                  {

                    const newProd = {

                      adicionar: 'Produto',
                      nome: this.state.nome,
                      url_foto: this.state.url_foto,
                      estoque_min: this.state.estoque_min,
                      preco: this.state.preco,
                      qtd: this.state.qtd,
                      tipo_un: this.state.tipo_un,
                      cat: this.state.cat,
                      fornecedor: this.state.fornecedor

                    }

                    setProduct(newProd)
                    
                  } }
            />
        </View>

      </ScrollView>
    );
  }
}
