import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
 
export default function Home() {
    const navigation = useNavigation();
    function dadosNavega(){
    navigation.navigate('Contatos' , {nome:'Ruan' , email:'assuncaoruan7@gmail.com'})
    }
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <LinearGradient
        start={{x:1, y:0, }}
 
        end={{ x:0, y:1, }}
 
      colors={['#FC874C', '#EAE676']} style={styles.linearGradient}>
      
      <Button title='Ir para sobre' onPress={()=>navigation.navigate('Sobre')}></Button>
      <Button title='Ir para Contatos' onPress={dadosNavega}></Button>
     
      </LinearGradient>
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});