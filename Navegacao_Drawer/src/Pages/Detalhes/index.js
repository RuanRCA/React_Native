import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Detalhes() {
 
  return (

   <View style={styles.container}>
    <Text>Detalhes</Text>
   </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#E0FFFF'
  },
});