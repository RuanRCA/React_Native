import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Home() {

  const navigation = useNavigation();

  function IrDetalhes() {
    navigation.navigate('Detalhes');
  }

  return (
    <View style={styles.container}>
      <Text styles={styles.texto}>Home</Text>

      <TouchableOpacity style={styles.Botao} onPress={IrDetalhes}>
        <Text styles={styles.textobtn}>Detalhes</Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     backgroundColor: '#00BFFF',
  },
  Botao: {
    // padding: 5,
    // width: 120,
    // marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 10,
    // height: 50,
    // backgroundColor: 'red',
    // color: 'white',
    padding:20,
     width:130,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:70,
     backgroundColor:'#00FF7F',
     margin:15,
  },

 textobtn: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'white',
  },
  texto: {
    color:'#fff',
    fontSize: 10,    
    fontWeight:'bold',
  }


});
