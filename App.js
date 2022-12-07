import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Videokartya from './Videokartya.js'
import F_lap from './F_lap.js'
import Forum from './Forum.js'
import PC_epites from './PC_epites.js'
import Kezdolap from './Kezdolap.js'

function Kezdolap_lap({ navigation }) {
  return (
    <Kezdolap/>
  )
}
function PC_epites_lap({ navigation }) {
  return (
    <PC_epites/>
  )
}

function Felh_lap({navigation}){
  return(
    <F_lap/>
  )
}
function Forum_lap({navigation}){
  return(
    <Forum/>
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
      <Drawer.Navigator useLegacyImplementation
        screenOptions={{drawerStyle: {backgroundColor: '#8D75AA', width: 200},
        headerShown: false, drawerActiveTintColor: 'purple',
        }} >
        <Drawer.Screen name="Kezdőlap" component={Kezdolap_lap} />
        <Drawer.Screen name="PC építés" component={PC_epites_lap} />
        <Drawer.Screen name="Fórum" component={Forum_lap} />
        <Drawer.Screen name="Felhasználói lap" component={Felh_lap} />
        <Drawer.Screen name="Videókartya" component={Videokartyak_lap} />
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}