import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';


export default function Contato() {
  return (
    <View style={styles.container}>

      <Text>Contato</Text>

      <TextInput placeholder= 'Digite Aqui'>
      </TextInput>
  
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
});