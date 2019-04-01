import React, { Component } from "react";
import { Text, ScrollView, ActivityIndicator, View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, ThemeProvider, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

console.disableYellowBox = true;


export default class Inicio extends Component {

  

  constructor(props){
    super(props);
    this.state ={ isLoading: true, tipo : this.props.tipo}
  }

  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {


    if(this.state.tipo == 'produtos'){
      const response = await fetch("https://gnunes.com.br/controlx/?listar=Produto");
      const json = await response.json();
      this.setState({ data: json.data,  isLoading: false });
    }

    if(this.state.tipo == 'fornecedor'){
      const response = await fetch("https://gnunes.com.br/controlx/?listar=Fornecedor");
      const json = await response.json();
      this.setState({ data: json.data,  isLoading: false });
    }

    if(this.state.tipo == 'categoria'){
      const response = await fetch("https://gnunes.com.br/controlx/?listar=Fornecedor");
      const json = await response.json();
      this.setState({ data: json.data,  isLoading: false });
    }
    
  };
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) =>  {

    if(this.state.tipo == 'produtos'){
      return(
      <ListItem
        title={`${item.nome} - R$ ${item.preco}`}
        subtitle={`${item.nome} - ${item.qtd}${item.tipo_un}`}
        leftAvatar={{
          source: item.foto && { uri: item.foto },
          title: item.nome
        }}

      // "id" "nome" "estoque_min" "preco" "${item.qtd}" "${item.tipo_un}" "${item.categoria_id}" "${item.fornecedor_id}" 

        button onPress={() => { alert(`ID: ${item.id} \nNome: ${item.nome} \nR$ ${item.preco} \nEstoque Minimo: ${item.estoque_min} \nQuantidade: ${item.qtd} \nTipo de Unidade: ${item.tipo_un} \nId de Categoria: ${item.categoria_id} \nId de Fornecedor: ${item.fornecedor_id} `) }}
      />)
    }

    if(this.state.tipo == 'fornecedor'){
      // "id","nome","bairro","cep","cidade","cnpj","comp","estado","num","rua","telefone", "deleted" 
      return(
      <ListItem
        title={`ID: ${item.id} \n${item.nome}`}
        subtitle={`${item.rua} - ${item.num}, ${item.bairro} ,${item.cidade} - ${item.estado}`}
        rightAvatar={{
          icon: { name: 'caret-right', color: '#EEE', type: 'font-awesome' },
          overlayContainerStyle: {backgroundColor: 'white'}  
        }}

        button onPress={() => { alert(
        `ID: ${item.id} 
        \nCPNJ: ${item.cnpj}
        \nNome: ${item.nome} 
        \nEndereço: ${item.rua} - ${item.num}, ${item.bairro} ,${item.cidade} - ${item.estado}
        \nCEP: ${item.cep} 
        \nTelefone: ${item.telefone}`) }}
      />)
    }

    if(this.state.tipo == 'categoria'){
      // "id","nome","deleted" 
      return(
      <ListItem
        title={`ID: ${item.id} - ${item.nome}`}
        subtitle={''}
        rightAvatar={{
          icon: { name: 'caret-right', color: '#EEE', type: 'font-awesome' },
          overlayContainerStyle: {backgroundColor: 'white'}  
        }}

         

        button onPress={() => { alert(`ID: ${item.id} \nNome: ${item.nome} `) }}
      />)
    }

  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      
      <ScrollView>
        
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={this.renderItem}
        />
        
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})