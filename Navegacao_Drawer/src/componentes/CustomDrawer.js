import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';

import { DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
 
  return (
    <DrawerContentScrollView {...props}>
   <View style={styles.drawer}>
    <Image style={styles.image} source={require('../Assests/login_icone.png')}></Image>
    <Text style={styles.texto}>Seja Bem Vindo!</Text>
   </View>
   <DrawerItemList {...props}></DrawerItemList>
   </DrawerContentScrollView>
  
  );
}

const styles = StyleSheet.create({
 drawer: {
    alignItems: 'center',
    justifyContent: 'center',
  
    marginTop:60

  },
  texto:{
    fontSize:17,
    marginTop:10,
    color:'#fff',
    marginBottom:10

  },
  image:{
    width:65,
    height:65,
    
  },
});