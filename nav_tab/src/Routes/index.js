
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@react-native-vector-icons/feather';
// import { StackRoutes } from '@react-navigation/native';
import StackRoutes from './stackRoutes';

import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Contato from '../Pages/Contato';
// import Detalhes from '../Pages/Detalhes';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (



    <Tab.Navigator
     screenOptions={{headerShown:false,
      tabBarHideOnKeyboard:true,
      tabBarActiveTintColor:'#fff',
      tabBarStyle:{backgroundColor:'#000',
        borderTopWidth:0,
     
      }
     }}
    >
      <Tab.Screen name = 'StackRoutes' component={StackRoutes} options={{ tabBarLabel:'Inicio' , tabBarIcon:({color})=><Feather name="home" size={20} color={color} />}}/>
      <Tab.Screen name = 'Sobre' component={Sobre} options={{tabBarIcon:({color})=><Feather name="info" size={20} color={color} />}}/>
      <Tab.Screen name = 'Contato' component ={Contato} options={{tabBarIcon:({color})=><Feather name="phone" size={20} color={color} />}}/>
      {/* <Tab.Screen name = 'Detalhes' component = {Detalhes}/> */}

    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
