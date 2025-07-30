
import { Text , View , Image , StyleSheet ,TouchableOpacity , } from "react-native";

export default function ModalFilmes(props) {
    return(
      <View style = {estilo.container}>
        <View style = {estilo.modalContainer}>
         <TouchableOpacity style ={estilo.botao} onPress={(props.fecharModal)}>
            <Text style={estilo.sair}>Sair</Text>
            </TouchableOpacity>  
            <Text style = {estilo.Titulo}>{props.filme.nome}</Text>
         <Text style = {estilo.texto}>{props.filme.sinopse}</Text> 
        </View>
      </View>
    );
}

const estilo = StyleSheet.create({
container:{
  flex:1,
 justifyContent:'center',
 alignItems:'center',
  borderRadius:15,
},
modalContainer:{
flex:1,
width:350,
backgroundColor:'#000',
},
texto:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20,
    color:'#fff',
    textAlign:'center',
    padding:5
},

sair:{
    color:"#fff",
    textAlign:'center',
    fontWeight:'bold',
    fontSize:18

},

Titulo:{
    color:'#fff',
    fontSize: 25,
    marginBottom:10,
    fontWeight:'bold',
    textAlign:'center',
    padding:10
},
botao:{
    width:"100%",
    backgroundColor:'#DC143C',
    padding:5,
    borderTopLeftRadius:3,
    boderButtonLeftRadius:3,
}

});