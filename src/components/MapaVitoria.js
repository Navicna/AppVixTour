import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { height, width } = Dimensions.get('window');


export default class Mapa extends Component {

  state = {
    places: [
      {
        id: 0,
        title: 'Pedra da Cebola',
        description: 'Excelente opção de passeio, tanto para caminhar, quanto para fazer piqueniques! O parque é muito bem cuidado, o paisagismo sempre bonito e colorido, tem vários animaizinhos pelo parque, porém, acho errado caminhão de água da Prefeitura transitando em velocidade perto do parquinho sempre cheio de crianças.',
        latitude: -20.276598,
        longitude: -40.297636,
      },
      {
        id: 1,
        title: 'Parque Moscoso',
        description: 'É um Parque lindo visualmente, possui opções de quadra de areia, parquinho para as crianças, bancos para leitura, academia popular, cantina, um palco para apresentações.Ambiente agradável, fresco e com muito espaço para relaxar. Como em qualquer parque urbano, há pombos e muita diversidade de pessoas. Funciona todos os dias.',
        latitude: -20.319468,
        longitude: -40.341812,
      },
      {
        id: 2,
        title: 'Convento',
        description: 'Conhecer o convento da Penha é uma aventura! Vá preparado que a subida é pesada mais ela é compensada com a bela vista que se obtém ao fim da jornada. Também há a disponibilização de transporte por vans com valores bem acessível. No espaço encontramos loja para comprar lembrancinhas, lanchonete e locais para descanso. A igreja do convento é maravilhosa. Com certeza esse é um passeio obrigatório para quem vai para Vitória.',
        latitude: -20.329169,
        longitude: -40.287090,
      },
      {
        id: 3,
        title: 'Palacio Anchieta',
        description: 'Palácio Anchieta é a sede do poder executivo do estado do Espírito Santo. O palácio localiza-se exatamente a frente do Porto de Vitória, na entrada da Cidade Alta, um dos bairros mais antigos da cidade. O Palácio é utilizado como sede do Governo do estado do Espírito Santo desde o século XVIII, sendo uma das sedes de governo mais antigas do Brasil.',
        latitude: -20.321319,
        longitude: -40.339603,
      },
      {
        id: 4,
        title: 'Morro do Moreno',
        description: 'Lugar maravilhoso, se você gosta de aventuras e tem vontade de fazer trilha, reuna com seus amigos e faça esse passeio pela trilhar até o topo do morro, ou simplesmente vá pela estrada. Ao chegar você será agraciado pela beleza da imensidão do mar é a belíssima vista do convento da Penha. Sem deixar de mencionar a vista das duas cidades Vix e VV . Respire fundo e perceba que nada do que você está passando é maior do que a beleza desse lugar.',
        latitude: -20.326867,
        longitude: -40.277650,
      },
      {
        id: 5,
        title: 'Mirante da Fonte Grande',
        description: 'Local perfeito para quem busca um contato com a natureza. O parque é bem preservado e contém vários exemplares da nossa fauna e flora. Profissionais capacitados que nos contam a história do parque e para fazer algumas trilhas pelo local. O parque também contém alguns Mirantes com vistas privilegiadas da Grande Vitória',
        latitude: -20.308653,
        longitude: -40.339299,
      },
      {
        id: 6,
        title: 'Praia de Camburi',
        description: 'A praia é maravilhosa. Ela fica localizada na parte continental da cidade, sendo também a maior praia da capital. Além da boa localização você pode curtir o mar bem perto de vários pontos turismos da cidade.',
        latitude: -20.281713,
        longitude: -40.288681 ,
      },

    ]
  };

  /*componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,

        });
      },
      (error) => {
        this.setState({ error: error.message })
      },
      { enableHighAccuracy: false, timeout: 1, maximumAge: 1, distanceFilter:1 }
    )
  }*/

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  }

  render() {

    const { latitude, longitude } = this.state.places[0];


    return (      
      <View style={styles.container}>

        <MapView style={styles.map}
          ref={map => this.mapView = map}
          initialRegion={{
            latitude: -20.276598,
            longitude: -40.297636,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231

          }}
          onMapReady={this._mapReady}
        >
          { this.state.places.map(place => (
            <Marker
              ref={mark => place.mark = mark}
              title={place.title}              
              key={place.id}
              
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
            />
          )) }
          
          

        </MapView>
        <ScrollView
          style={styles.placeContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={e => {
            const scrolled = e.nativeEvent.contentOffset.x;

            const place = (scrolled > 0)
            ? scrolled / Dimensions.get('window').width
            : 0;

            const { latitude, longitude, mark } = this.state.places[place];

            this.mapView.animateToCoordinate({
              latitude,
              longitude,
            }, 1000);

            setTimeout(() => {
              mark.showCallout()
            }, 1000);

          }}
          >
          { this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
              
              <Text style={{ fontSize: 20 }}>{place.title}</Text>
              <Text>{place.description}</Text>
            </View>

          ))}
          
          <View style={styles.place}></View>
        </ScrollView>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  placeContainer: {
    width: '100%',
    maxHeight: 200,

  },
  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,


  }
});
