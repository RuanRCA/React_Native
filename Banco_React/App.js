import { useEffect , useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {db} from './src/Firebase.Connections';
import {doc , getDoc , onSnapshot} from 'firebase/firestore'

export default function App() {
  const[nome , setnome ] = useState('Carregando...');

  useEffect(()=>{
    async function getDados() {
      // const docref = doc(db,"Users" , "1")
      // await getDoc(docref)
      // .then((snapshot)=>{
      //  console.log(snapshot.data())
      //  setnome(snapshot.data()?.Nome)
      // })
      // .catch((err)=>{
      //   console.log('error: ')
      //   console.log(err)
      // })
      onSnapshot(doc(db , "Users" , "2") , (doc)=>{
        setnome(doc.data()?.Nome)
      })
    }
    getDados();
  },[])

  return (
    <View style={styles.container}>
      <Text>Nome: {nome}</Text>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
