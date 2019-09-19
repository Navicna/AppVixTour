import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SobreApp extends Component {
	render() {
		return (
			<View style={{ flex: 2, backgroundColor: '#F09BBE' }}>
				<View style={{ paddingTop: 30 }}>
					<Text style={{  backgroundColor: '#0096E1', color:'#FFF', fontSize: 16 }}>
						Conheça o aplicativo que vai conectar você com a cidade de Vitória, capital espírito santense dona de um dos cartões postais mais valiosos do Brasil! Então aperte o botão de voltar e pressione a nossa logo e embarque nesse tour pela cidade de Vix! 
					</Text>
				</View>
				<View style={{ flex:1 , backgroundColor: '#0096E1' }}><Text/></View>
				
			</View>
					
		);
	}
}
