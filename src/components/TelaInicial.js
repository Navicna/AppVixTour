import React, { Component } from 'react';
import {
  TouchableHighlight,
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const vixTour = require('../../imgs/vixtour.png');

export default class TelaInicial extends Component {
	render() {
		return (
            <View style={[styles.estiloViewTitulo, { backgroundColor: this.props.corDeFundo }]}>
                <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 100, paddingBottom: 20, backgroundColor: '#FFF' }} >
                    <TouchableHighlight
                        underlayColor={this.props.corDeFundo}
                        activeOpacity={1}
                        onPress={() => { Actions.MapaVitoria(); }}
                    >
                        <Image source={vixTour} />    
                    </TouchableHighlight>
                    
                </View>
                <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center'}}>
                    
                    <TouchableHighlight
                        onPress={() => { Actions.SobreApp(); }}
                    >
                        <Text style={{ fontSize: 20, color: '#0096E1' }}> Saiba mais!</Text>
                    </TouchableHighlight>
                </View>

            </View>
			
		);
	}
}

const styles = StyleSheet.create({

    estiloViewTitulo: {
      backgroundColor: '#FFF',
      flex: 1    
    }  
    
  });