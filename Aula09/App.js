import React ,{Component} from 'react';
import {View , Text , StyleSheet, TextInput,Button} from 'react-native';

class App extends Component {
  constructor(props){
    super (props)
    this.state={
      nome:'',
      input:''
    };
    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(novo){
   if (novo.length > 0){
    this.setState({nome: 'Seja bem vindo , ' + novo})
   }
   else {
    this.setState({nome:''})
   }

  }
  entrar(){
    if (this.state.input === ''){
      alert('Digite seu nome ');
      return;
    }
    this.setState({nome:'seja Bem Vindo' + this.state.input});
  }
  render(){
    return(
    <View style={estilos.container}>
      <TextInput style= {estilos.input} placeholder='Digite seu nome' onChangeText={(texto)=> this.setState({input:texto})}>
      </TextInput>
      <Text style = {estilos.texto}> {this.state.nome}</Text>
      <Button title='Entrar' onPress={this.entrar} ></Button>
    </View>
    );
  }
}
const estilos = StyleSheet.create({
  container:{
    marginTop:50,
    backgroundColor: '#999',
    flex:1

  },

  input:{
    padding: 10,
    height: 50,
    borderWidth: 1,
    margin: 20,
    borderColor: 'black',
    fontSize: 30,
    backgroundColor: '#fff'
  },
  texto:{
    fontSize: 25,
    textAlign: 'center'

  }

});
export default App;

