import React , {Component} from "react";
import { StyleSheet, Text , View } from "react-native";

class Pessoas extends Component{
    render(){
    return(
        <View style={styles.areaPessoa}>
       
       <View style={styles.cabecalho}>
        <Text style={styles.BemVindo}>Seja-Bem Vindo</Text>
       </View>
        <Text style ={styles.textoPessoa}>Nome: {this.props.data.nome}  </Text>
        <Text style= {styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style = {styles.textoPessoa}>E-mail:{this.props.data.email}</Text>
      </View>
    );   
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      areaPessoa:{
        backgroundColor: 'blue',
        height: 200,
        marginTop: 15
      },
    
      textoPessoa:{
        fontSize:20,
        marginTop: 10
      },
     cabecalho:{
       alignItems: 'center',
       justifyContent: 'center'
      },
      BemVindo:{
        fontSize: 15
      }
});

export default Pessoas;

