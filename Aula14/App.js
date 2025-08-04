
// import { Component } from 'react';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';

// class App extends Component {
//   render(){
//     return(
//       <View style={styles.container}>
//       <ScrollView horizontal = {true} >

    
//         <View style = {styles.box1}></View>
//         <View style = {styles.box2}></View>
//         <View style = {styles.box3}></View>
//         <View style = {styles.box4}></View>        
    

//       </ScrollView>

//       </View>
      
//     );
//   }
// }

// const styles=  StyleSheet.create({

//   container:{
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'

//   },

//   box1:{
//     backgroundColor:'red',
//     height:250,
//     width: 250
   
//   },
//   box2:{
//     backgroundColor:'green',
//     height:250,
//     with:250
//   },
//   box3:{
//     backgroundColor:'yellow',
//     width:250,
//     height:250
//   },
//   box4:{
//     backgroundColor: 'blue',
//     height:250,
//     width:250
//   }

// });

// export default App;


import { Component } from 'react';
 import { StyleSheet, Text, View, ScrollView , FlatList} from 'react-native';

 import Pessoas from './src/Pessoas';

 class App extends Component{
  constructor(props){
    super (props);
    this.state= {

      feed:[
        {id:'1' , nome:'Ruan' , idade:23 , email: 'assuncaoruan7@gmail.com'},
        {id:'2' , nome:'Maria' , idade:44 , email: 'maria@gmail.com'},
        {id:'3' , nome:'Danilo' , idade:13 , email: 'danilo@gmail.com'},
        {id:'4' , nome:'Vanessa' , idade:19 , email: 'vanessa@gmail.com'},
        {id:'5' , nome:'Daniel' , idade:50 , email: 'daniel@gmail.com'},
        {id:'6' , nome:'Renato' , idade:28 , email: 'renato@gmail.com'},
        {id:'7' , nome:'Raissa' , idade:30 , email: 'raissa@gmail.com'},
        {id:'8' , nome:'Laryssa' , idade:22 , email: 'laryssa@gmail.com'},
        {id:'9' , nome:'Renata' , idade:19 , email: 'renata@gmail.com'},
        {id:'10' , nome:'kamila' , idade:49 , email: 'kamila@gmail.com'},
        {id:'11' , nome:'Andre' , idade:39 , email: 'andre@gmail.com'},
      ]

    }
  }
  render(){
    return (
      <View style={styles.container}>
        <FlatList
         data={this.state.feed}
         keyExtractor={(item)=> item.id}
         renderItem={({item})=> <Pessoas data={item}></Pessoas>}
         >
        </FlatList>
      </View>
    );
   }
  
 }

 const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

 });

 export default App;

 



  
