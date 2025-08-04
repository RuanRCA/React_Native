import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Contato from '../Pages/Contato';
import StackRoutes from './StackRoutes';

import CustomDrawer from '../componentes/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes() {

    return (

        <Drawer.Navigator
        drawerContent={CustomDrawer}
            screenOptions={{
                headerShown: true,
                drawerStyle:{ 
                    backgroundColor:'#98FB98',

                }, drawerItemStyle: {marginBottom:10},
                drawerActiveBackgroundColor:'#006400',
                drawerActiveTintColor:'#fff',
                drawerInactiveBackgroundColor:'#ccc',
                drawerInactiveTintColor:'#000'
            }}
        >
            <Drawer.Screen
                name='Home' component={StackRoutes}
            />
            <Drawer.Screen
                name='Sobre' component={Sobre}
            />

            <Drawer.Screen
                name='Contato' component={Contato}
            />

        </Drawer.Navigator>

    );
}


