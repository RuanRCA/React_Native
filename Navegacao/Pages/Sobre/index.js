import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
     const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página Sobre</Text>
   <Button title='Ir para Contatos' onPress={()=>navigation.navigate('Contatos')}></Button>
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
