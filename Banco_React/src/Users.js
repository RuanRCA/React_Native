import {View , StyleSheet , Text , TouchableOpacity} from "react-native";

export function UsersList({data}){
    return(
    <View style={styles.container}>
     <Text>Nome: {data.nome}</Text>
     <Text>Idade:{data.idade}</Text>
     <Text>Cargo:{data.cargo}</Text>
     <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto}>Deletar Usuário</Text>
     </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet .create({
container:{
backgroundColor:'#f0f0f0',
padding: 10,
borderRadius:5,
marginBottom:15,
margin:10,
borderRadius:8
},
botao:{
    padding:10,
     width:75,
     borderRadius:10,
     borderColor:'black',
     height:60,
     backgroundColor:'#DC143C',
     borderWidth:2,
     margin:10,
     marginLeft:250,
     marginTop:-38
},
texto:{
    fontWeight:'bold',
    color:'#fff'
}
})