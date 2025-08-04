import { Component, StatusBar } from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';

class Entrar extends Component{

  render(){
    return(
   <View style={styles.modal}>
          <Text style={{color:'#fff' , fontSize:28 , textAlign:'center'}}>Seja Bem Vindo</Text>
          <Button title='Sair' onPress={this.props.fechar}></Button>
        </View>
    );
  }
}

const styles= StyleSheet.create({
 modal:{
  backgroundColor:'gray',
  // flex:1,
  width:'100%',
  height:350,
  borderRadius:15,
  
  },

});
export default Entrar;

