
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import Home from '../Pages/Home';
 import Detalhes from '../Pages/Detalhes';

 const Stack = createNativeStackNavigator()

 export default function StackRoutes(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShow:false,
        }}
        >
            <Stack.Screen name = 'Home ' component={Home} />
            <Stack.Screen name = 'Detalhes' component={Detalhes} />
        </Stack.Navigator>
    )
 }