import { Component, StatusBar } from 'react';
import { StyleSheet, View , Button , Modal} from 'react-native';
import Entrar from './src/Entrar';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      visibleModal:false,
    };
    this.entrar= this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  };
  entrar(){
    this.setState({visibleModal:true})
  }
    sair(visible){
      this.setState({visibleModal:visible});
    }
  
  render(){
    return(
     <View style={styles.container}>
      <Button title='Entrar' onPress={this.entrar}></Button>
      <Modal visible={this.state.visibleModal} animationType='slide' transparent={true}>
        <View style={styles.viewmodal}>
          <Entrar fechar={()=> this.sair(false)}></Entrar>
        </View>
      </Modal>

     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // modal:{
  // backgroundColor:'gray',
  // // flex:1,
  // width:'100%',
  // height:350,
  // borderRadius:15,
  
  // },
  viewmodal:{
    flex:1,
    margin:15,
    justifyContent:'center',
    alignItems:'ce4nter'
  }
});

export default App;
