import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contatos from './Pages/Contatos';
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title:'Tela Inicio',
          headerStyle:{
            backgroundColor:'#20B2AA',
          },
          headerTintColor:'#FFF'
        }}/>
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contatos" component={Contatos} />
      </Stack.Navigator>
 
    </NavigationContainer>
  )
}