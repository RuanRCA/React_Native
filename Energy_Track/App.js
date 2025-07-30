
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput , Modal , Image , TouchableOpacity} from 'react-native';

class App extends Component{
constructor(props){
  super(props);
  this.state={
  ModalVisible : false,
  alcool:'',
  gasolina: '',
  alcoolValor:'',
  gasolinaValor:'',
  ImgResultado:null,
  ImagemAlcool: source = require('./src/Img/alcool.png'),
  ImagemGasolina: source = require('./src/Img/gasolina.png'),
  resultado:'',
  resultadoColor:''
  }
//  this.calcular = this.carregar.bind(this);
}

calcular = () =>{
const {alcool , gasolina} = this.state ;

let ImgResultado = null;
let resultado = "";
let resultadoColor = "";
const calculo = parseFloat(alcool) / parseFloat(gasolina);

if (calculo <= 0.7){
  ImgResultado= this.state.ImagemAlcool;
   resultado="Recomendo usar Álcool!";
   resultadoColor= ' #0A8D2D' ;
}

else {
    ImgResultado= this.state.ImagemGasolina;
    resultado ="Recomendo usar Gasolina!";
    resultadoColor =" #EEEE2D";

}

this.setState({
        ModalVisible: true,
        resultado,
        resultadoColor,
        alcoolValor: alcool,
        gasolinaValor: gasolina,
        alcool: "",
        gasolina: "",
        ImgResultado,
      });



}

render(){
return(

  <View style={styles.container}>
    <Image style = {styles.logo} source={require('./src/Img/energy_track.png')} />  

    <View style = {styles.header}>
    <Text style={styles.Texto}>Álcool preço por litro:</Text>

    <TextInput style = {styles.Input} placeholder='Digite o preço do Álcool' placeholderTextColor='#fff'     keyboardType="numeric"
        onChangeText={(texto) => this.setState({alcool: texto })}
          value={this.state.alcool} >
    </TextInput>

    <Text style={styles.Texto}>Gasolina preço por litro:</Text>
    <TextInput style = {styles.Input} placeholder='Digite o preço da Gasolina'  placeholderTextColor='#fff'
      keyboardType="numeric"
       onChangeText={(text) => this.setState({gasolina: text })}
       value={this.state.gasolina}
    ></TextInput>

    
      <TouchableOpacity onPress = {this.calcular}style={styles.Calcular}>
       <Image style={styles.Play} source={require('./src/Img/Play.png')}></Image><Text style={styles.textcalcular}>Calcular</Text>
             </TouchableOpacity>

        <Modal
        transparent={true}
        visible={this.state.ModalVisible}
        animationType="fade">
        <View style={styles.viewmodal}>
          <View style = {styles.modalItens}>

            < Image
             source={this.state.ImgResultado}
                style={styles.ImagemModal} />

            <Text
                style={{
                  fontSize: 30,
                  fontWeight:'bold',
                  textAlign: "center",
                  color: this.state.resultadoColor,
                  marginBottom: 20,
                  marginTop: 20,
                }}
              >
                {this.state.resultado}
              </Text>

              <Text style={styles.precos}>Com os preços:</Text>

              <Text style={styles.valorAlcoll}>
                Álcool: R$ {this.state.alcoolValor}
              </Text>

              <Text style={styles.valorGasolina}>
                Gasolina: R$ {this.state.gasolinaValor}
              </Text>

              <TouchableOpacity
                onPress={() => this.setState({ ModalVisible: false })}
                style={styles.buttonModal}
              >
                <Text style={styles.textoModal}>Calcular novamente</Text>
              </TouchableOpacity>

          </View>
        
        </View>
      
  </Modal>
    </View>
    
  </View>

 



);
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#1E0D73',
      marginTop: 50,
  },
  logo:{
     width:350,
     height:345,
     marginTop: 10,
     alignSelf: 'center',
      marginLeft: 5,         
  },
  header:{
    padding:15
  },
  Input:{
    margin: 20,
    padding: 5,
    paddingRadius: 20,
    width: 340,
    height:50,
    borderRadius: 15,
    backgroundColor: '#3111D3',
  },
  Texto:{
  color:'#fff',
  paddingLeft:20,
  fontSize:26,
  },

  Calcular:{
     margin: 20,
    padding: 5,
    paddingRadius: 20,
    width: 150,
    height:50,
     alignSelf: 'center',
    borderRadius: 20,
    backgroundColor:'#44B5FC',
    paddingTop:6
  },

  Play:{
   paddingLeft: 20
  },
   
  textcalcular:{
    color:'#fff',
    flexDirection:'row',
    textAlign:'center',
    fontSize:20,
    marginTop: -33,
    paddingLeft:20
  },
  
  viewmodal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },

  modalImagem: {
    width: 190,
    height: 160,
    alignSelf: "center",
  },

 preco: {
    fontSize: 20,
    fontWeight:'bold',
    color: "#fff",
    textAlign: "center",
  },

  valorAlcoll:{
    fontSize: 18,
    fontWeight:'bold',
    textAlign: "center",
    marginBottom: 15,
    marginTop: 10,
    color: "#fff"
  },

  valorGasolina:{
    fontSize: 18,
    fontWeight:'bold',
    textAlign: "center",
    marginBottom: 15,
    marginTop: 10,
    color: "#fff"
  },

  valorGasolina:{
     fontSize: 18,
    fontWeight:'bold',
    textAlign: "center",
    marginBottom: 15,
    marginTop: 10,
    color: "#fff"
  },
  modalItens:{
    backgroundColor: "#40E0D0",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonModal:{
    alignSelf: "center",
    borderRadius: 15,
    width: "50%",
    padding: 10,
    marginTop: 30,
    backgroundColor: "#44B5FC",
  },

    textoModal:{
    fontSize: 16,
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    }








});

export default App;