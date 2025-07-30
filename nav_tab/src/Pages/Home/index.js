import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  function navegateDetalhes(){
    navigation.navigate('Detalhes');
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button style={styles.botao} title = 'Ir para Detalhes ' onPress={navegateDetalhes }></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao:{
    width:30,
    height:30,
  }
});