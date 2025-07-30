import React,{useEffect , useState} from 'react';
import { StyleSheet, Text, View , FlatList , ActivityIndicator} from 'react-native';
import api from './src/services/API';
import Filme from './src/services/Filmes';


export default function App() {

 const [filmes,setfilmes] = useState([]);
 const [loading , setLoading] = useState(true);

  useEffect(()=>{
  
    async function getFilmes() {
    const resposta = await api.get('r-api/?api=filmes');
    // console.log(resposta.data);
    setfilmes(resposta.data);
    setLoading(false);
    }

    getFilmes();

  },[]);

  if (loading){
    return(
      <View style={{alignItems:'center' , justifyContent:'center' , flex:1}}>
        <ActivityIndicator color= '#121212' size ={40} ></ActivityIndicator>
      </View>
    )
  }
  else{


  return (
    <View style={styles.container}>

      <FlatList
      data= {filmes}
      renderItem={({item})=><Filme data = {item}></Filme>}
      ></FlatList>

    
    </View>
  );
}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
