import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import TelaInicial from './components/TelaInicial';
import MapaVitoria from './components/MapaVitoria';
import SobreApp from './components/SobreApp';



const Rotas = () => (
    <Router sceneStyle={{backgroundColor: '#F09BBE' }}>
        <Stack  key='root'>
            
            <Scene key='TelaInicial' component={TelaInicial} title= 'Vix Tour' />
            <Scene key='MapaVitoria' component={MapaVitoria} title= 'Mapa de Vitória' />
            <Scene key='SobreApp' component={SobreApp} title= 'Saiba mais' />
        </Stack>
      </Router>
);

export default Rotas;