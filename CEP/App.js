import React , {useState} from "react"
import { StyleSheet, Text, View ,TextInput ,TouchableOpacity , Alert ,SafeAreaView , ActivityIndicator} from 'react-native';

import api from './src/services/api';

export default function App(){
  const [cep , setCep] = useState("");
  const [logradouro , setLogradouro] = useState("");
  const [bairro , setBairro] = useState("");
  const [localidade , setLocalidade] = useState("");
  const [uf , setUf] = useState("");
  const [ddd , setDDD]= useState("");
  const [loading , setLoading] = useState("false");

 
  async function buscarCep(){
       
    if (cep=="" || cep.length!=8){
     
      Alert.alert('Cep Inválido')
    setCep(""); 
    setLogradouro("");
    setLocalidade("");
    setBairro("");
    setDDD("");
    setUf("");
    }
   setLoading(true);
    try{
   
    const resposta = await api.get(`/${cep}/json/`)
   
    setLogradouro(resposta.data.logradouro);
    setBairro(resposta.data.bairro);
    setLocalidade(resposta.data.localidade);
    setUf(resposta.data.uf);
    setDDD (resposta.data.ddd);
    setLoading(false);
    }

    catch(error){
      console.log("ERRO" + error );
    }
  }

  function Limpar (){
    setCep("");
    setLogradouro("");
    setLocalidade("");
    setBairro("");
    setDDD("");
    setUf("");
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topBar}>
        <Text style={styles.Titulo}>Buscador de Cep</Text>

      </View>

      <View style={styles.Cep}>
     <TextInput style = {styles.InputCep}
     value={cep}
     onChangeText={(texto) => setCep(texto)}
     placeholder="CEP"
     keyboardType="numeric"
     />
   

     <TouchableOpacity style= {styles.BotaoBuscar} onPress={buscarCep}
     >
        
      <Text style = {styles.Buscar}>Buscar</Text>
     </TouchableOpacity>

      </View>

    <TextInput style = {styles.caixa}
     value={logradouro}
     onChangeText={(texto) => setLogradouro(texto)}
     placeholder="Logadouro"
     />


     <TextInput style = {styles.caixa}
     value={bairro}
     onChangeText={(texto) => setBairro(texto)}
     placeholder="Bairro"
     />


     <TextInput style = {styles.caixa}
     value={localidade}
     onChangeText={(texto) => setLocalidade(texto)}
     placeholder="Cidade"
     />

     <TextInput style = {styles.Uf}
     value={uf}
     onChangeText={(texto) => setUf(texto)}
     placeholder="Estado"
     />

     <TextInput style = {styles.Uf}
     value={ddd}
     onChangeText={(texto) => setDDD(texto)}
     placeholder="DD"
     />


     <TouchableOpacity style= {styles.BotaoLimpar} onPress={Limpar} >
      <Text style = {styles.limparTexto}>Limpar</Text>
     </TouchableOpacity>


    </SafeAreaView>
  );
}




  

const styles = StyleSheet.create({
  container: {
    flex: 1,
   flexDirection:'column',

  },
  topBar:{
    flexDirection:'row',
    height:70,
    backgroundColor:'#018786',
  },
  Titulo:{
  color:'#fff',
  fontSize:25,
  fontWeight:"bold",
  alignSelf:'center',
  margin:20,
  },
  Cep:{
   flexDirection:'row',
   height:100,
   marginHorizontal:20,
   
  },

  InputCep:{
    borderColor:'#000000',
    borderWidth:2,
    width:200,
    fontSize:18,
    marginTop:30,
    marginEnd:20,
    borderRadius:10,
    padding:15

  },
  BotaoBuscar:{
   backgroundColor:"#018786",
   width:120,
   height:70,
   marginTop:30,
   marginEnd:20,
   borderRadius:10,
   padding:20,
  },
  Buscar:{
  color:"#fffff",
  fontSize:18,
  fontWeight:"bold",
  alignSelf:"center",
  },
  caixa:{
    borderColor:'#000000',
    borderWidth:2,
    padding:25,
    fontSize:18,
    borderRadius:10,
    marginHorizontal:20,
    margin:10

  },
  Uf:{
    borderColor:'#000000',
    borderWidth:2,
    width:100,
    fontSize:18,
    marginTop:10,
    marginEnd:20,
    borderRadius:10,
    marginHorizontal:20,
    padding:15
  },
  BotaoLimpar:{
    padding:20,
     width:120,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:70,
     backgroundColor:'#DC143C',
     margin:15
  },

  limparTexto:{
   color:"#fffff",
  fontSize:18,
  fontWeight:"bold",
  alignSelf:"center",
  }

});
