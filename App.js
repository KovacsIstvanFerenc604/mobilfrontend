import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Elso from './Elso.js'
import Videokartya from './Videokartya.js'

function Kezdolap({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}

function Pc_epites({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}

function Elso_lap({navigation}){
  return(
    <Elso/>
  )
}
function Videokartyak_lap({navigation}){
  return(
    <Videokartya/>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Kezdőlap" component={Kezdolap} />
        <Drawer.Screen name="PC építés" component={Pc_epites} />
        <Drawer.Screen name="Fórum" component={Forum} />
        <Drawer.Screen name="Felhasználói lap" component={Elso_lap} />
        <Drawer.Screen name="Videokartya" component={Videokartyak_lap} />
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}