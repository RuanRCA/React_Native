import React , {useLayoutEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation ,StackActions, useRoute  } from '@react-navigation/native';
 
export default function Contatos() {
 
    const navigation = useNavigation();
    const route = useRoute();

    useLayoutEffect(()=>{
    navigation.setOptions({
    title:route.params?.nome === '' ? 'Pagina de Contato sem Login': route.params?.nome
    })
    },[])

    function handlerHome(){
     navigation.dispatch(StackActions.popToTop())
    }
  return (
    <View style={styles.container}>
      <Text>Página Contatos</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
     <Button title='Ir para Home' onPress={handlerHome}></Button>
     <Button title='Voltar' onPress={()=>navigation.goBack()}></Button>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:26,
  },
});