import { useEffect , useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity , TextInput , FlatList } from 'react-native';
import {db} from './src/Firebase.Connections';
import {doc , getDocs , getDoc  , onSnapshot , setDoc , collection , addDoc} from 'firebase/firestore'
import { UsersList } from './src/Users';

export default function App() {
  const[nome , setNome ] = useState();
  const [idade , setIdade] = useState();
  const [cargo , setCargo] = useState();
  const [showForm, setshowForm] = useState(true);
  const [users,setUsers]= useState([]);

  useEffect(()=>{
    async function getDados() {
      // const docref = doc(db,"Users" , "2")
      // await getDoc(docref)
      // .then((snapshot)=>{
      //  console.log(snapshot.data())
      //  setnome(snapshot.data()?.Nome)
      // })
      // .catch((err)=>{
      //   console.log('error: ')
      //   console.log(err)
      // })
      // onSnapshot(doc(db , "Users" , "2") , (doc)=>{
      //   setnome(doc.data()?.Nome)
      // })
      const usersRef = collection(db , "Users");

      onSnapshot(usersRef ,(snapshot)=>{
        let lista = [];
        snapshot.forEach((doc)=>{
          lista.push({
            id: doc.id,
            nome:doc.data().Nome,
            idade:doc.data().Idade,
            cargo:doc.data().Cargo
          })
        })
        //console.log(lista);
        setUsers(lista)
      })
    }
    getDados();
  },[])

  async function handlerRegister() {

    if (nome=="" || idade== "" || cargo== ""){
      alert("Preencha os Campos");
      setNome("");
      setIdade("");
      setCargo("");
      return;
    }

    
    // await setDoc(doc(db,"Users" , "4"),{
    //   nome:"Catarina",
    //   idade:"26",
    //   cargo:"Front-End",
    // })
    // .then(()=>{
    //   console.log("Cadastro com sucesso")
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    await addDoc(collection (db,"Users" ),{
      Cargo:cargo,
      Idade:idade,
      Nome:nome,
      
     })
    // .then(()=>{
    //     console.log("Cadastro com sucesso")
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
   setNome("");
   setIdade("");
   setCargo("");
  }

  function handleToggle(){
    setshowForm(!showForm);
  }

  return (

    <View style={styles.container}>

      {showForm &&(

<View>
<Text style={styles.label}>Nome:</Text>
  <TextInput
  style={styles.Input}
  placeholder='Digite Seu Nome'
  value={nome}
  onChangeText={(text)=>setNome(text)}
  />

  <Text style={styles.label}>Idade:</Text>

<TextInput
  style={styles.Input}
  placeholder='Digite Sua Idade'
  value={idade}
  onChangeText={(text)=>setIdade(text)}
  />

<Text style={styles.label}>Cargo:</Text>

<TextInput
  style={styles.Input}
  placeholder='Digite Seu Cargo'
  value={cargo}
  onChangeText={(text)=>setCargo(text)}
  />

  <TouchableOpacity style={styles.button} onPress={handlerRegister}>
    <Text style={styles.buttonText}>Cadastrar</Text>
  </TouchableOpacity>
  </View>
      )}


  
      {/* <Text>Nome: {nome}</Text> */}

      
  
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text style={styles.buttonText}>{showForm?"Escoder Formulario" : "Mostrar Formulario"}</Text>
      </TouchableOpacity>

      <FlatList style={styles.lista}
      data={users}
      keyExtractor={(item)=> String(item.id)}
      renderItem={({item})=><UsersList data={item}/>}
      />


  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },

  button:{
  backgroundColor:"#000",
  alignItems:'center',
  marginTop:20,
  borderRadius:8,
  marginLeft:10,
  marginRight:10
  },

  buttonText:{
    padding:15,
    color:'#fff',
    fontWeight:'bold',
    fontSize:18
  },
  label:{
    color:"#000",
    marginBottom:4,
    fontSize:18,
    marginLeft:10,
    fontWeight:'bold'

  },
  Input:{
    borderWidth:2,
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
  },

  lista:{
   marginLeft:10,
   marginRight:10,
   marginTop:10
  }
});
