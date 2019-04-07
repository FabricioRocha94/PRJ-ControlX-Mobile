import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Vibration,
  View,
  PermissionsAndroid,
  StatusBar
} from 'react-native';
import { Actions } from "react-native-router-flux";
import BarcodeScanner from 'react-native-barcodescanner';
import { Button, Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'É Precisso dar permissão da camera',
        message:
          'Precisamos da permissão para poder ler o códico de barras. ',
        buttonNeutral: 'Perguntar depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'Aceitar',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else {
      return false
    }
  } catch (err) {
    console.warn(err);
  }
}

const a = 0;

export default class Camera extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      barcode: '',
      cameraType: 'back',
      text: 'Mire no codigo de barras e espere.',
      torchMode: 'off',
      type: '',
      cameraPermission: requestCameraPermission(),
    };
  }
  
  

  barcodeReceived(e) {
    if (e.data !== this.state.barcode || e.type !== this.state.type) Vibration.vibrate();
    
    this.setState({
      barcode: e.data,
      text: `${e.data}`,
      type: e.type,
    });
  }

  

  render() {
    return (
        
      <View style={styles.container}>
      { this.state.cameraPermission ? <StatusBar backgroundColor="#a01601" barStyle="light-content"/> : requestCameraPermission() }
        <BarcodeScanner
          onBarCodeRead={this.barcodeReceived.bind(this)}
          style={{ flex: 1 }}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}
        />
        <View style={styles.statusBar}>
          <Text style={styles.statusBarText}>{this.state.barcode}</Text>
          <Button
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors: ['#751102', '#A72F1D'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              icon={<Icon name='plus-circle' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#E2474B' }}
              title='Adicionar Produto'
              onPress={() => {
                Actions.addP({ editProd: { edit : false }, codbarras: this.state.barcode, cam: true});
              }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },
});