import React , {useState} from "react";

import { Text , View , Image , StyleSheet ,TouchableOpacity , Modal } from "react-native";

import ModalFilmes from "./Modal_Filmes/modal";

export default function Filmes({data}){
const[modalVisible,setModalVisible] = useState(false);

return (
    <View>
        <View style = {styles.card}>
       <Text style = {styles.titulo}>{data.nome}</Text>
        <Image style = {styles.capa} source = {{uri:data.foto}}></Image>
        </View>
       <View style = {styles.areaBotao}>
        <TouchableOpacity style = {styles.botao} onPress={()=>setModalVisible(true)}>
            <Text style = {styles.textoBotao}>Ver Mais</Text>
        </TouchableOpacity>
       </View>

       <Modal animationType = "slide" visible = {modalVisible} transparent = {true} >

        
          <ModalFilmes filme={data}  fecharModal={()=>setModalVisible(false)}/>
       
       
       </Modal>
    </View>
)
}

const styles =  StyleSheet.create({
capa:{
    height:250,
    zIndex:2,
   
},
card:{
    backgroundColor:'#a6a6a6',
    margin:15,
    elevation:2,
     borderRadius:10,
},
titulo:{
    fontSize:20,
    fontWeight:'bold',
    padding:15,
    color:'#000'
},
areaBotao:{
 alignItems:'flex-end',
 marginTop:-45,
 marginRight:15
 

},
textoBotao:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:13,
    textAlign:'center',
    opacity:0.8

},
botao:{
    width:100,
    backgroundColor:'black',
    padding:5,
    borderTopLeftRadius:8,
    boderButtonLeftRadius:8,
},

viewmodal:{
    alignItems:'center',

}

});