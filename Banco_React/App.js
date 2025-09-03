import {useState} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {auth} from './src/Firebase.Connections'
import { FormUser } from './src/formUser';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';


export default function App() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [authUser , setAuthUser] = useState(null)

  async function handleCreateUser (){
  const user =   await createUserWithEmailAndPassword(auth , email, password)
    console.log(user)
    setEmail("")
    setPassword("")
    alert("usuario criado")
  }

  function handleLogin(){
     signInWithEmailAndPassword(auth , email, password)
     .then((user)=>{
      console.log(user);

      setAuthUser({
        email: user.user.email,
        uid:user.user.uid
      })
      setEmail("")
      setPassword("")
     })

   .catch((err)=>{
    console.log(err.code)
    if(err.code === 'auth/missing-password'){
      alert("A senha é obrigatória")
    }
     })


  }
  return (
    <View style={styles.container}>
      {/* <FormUser></FormUser> */}

      <Text>usuario Logado:{authUser && authUser.email}</Text>

      <Text style={styles.txtInput}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu E-mail'
        value={email}
        onChangeText={(text)=>setEmail(text)}
      ></TextInput>

      <Text style={styles.txtInput}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite sua Senha'
        value={password}
        onChangeText={(text)=>setPassword(text)}
        secureTextEntry={true}
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
        <Text style={styles.buttonTxt}>Criar uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonTxt}>Fazer Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },

  input: {
    marginLeft: 10,
    marginRight: 10,
     borderWidth: 2,
    padding: 15,
    margin:8,
    borderColor:'#000',
    // elevation: 3,
    // shadowColor: '#000',
  
     borderRadius: 10,
  },

  txtInput: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#000',
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,

  },

  buttonTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight:'bold'
  }
})