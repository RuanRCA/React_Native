import React, {Component} from "react";
import {View ,Text , Image , Button , StyleSheet, ScrollView} from "react-native";


// class App extends Component{
//   constructor(props){
//   super(props);
//   this.state = {titulo: '' , imagem:'https://png.pngtree.com/png-vector/20230625/ourmid/pngtree-breaking-news-label-vector-png-image_7316922.png', texto: 'Notícias'}
//   this.publicar = this.publicar.bind(this);
//   }
//   publicar(titulo,imagem,texto){
//     this.setState({titulo: titulo , imagem: imagem , texto: texto});
//   }
//   render(){
//     return(
//       <View style={{padding:35}}>
//         <Informacao titulo={this.state.titulo} imagem= {this.state.imagem} texto={this.state.texto}></Informacao>

//         <Button title='Noticia 1' onPress={() => this.publicar( 'Óleo de cozinha usado: saiba como descartar de forma correta' ,'https://s2-g1.glbimg.com/k6LEpOuA67bCnU057jMy--WWfmg=/0x0:1200x800/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/t/2kNa8yQSaCzVIBvhzWxg/oleo-de-cozinha-1-.jpg' , 'Um litro de óleo despejado nos rios polui até um milhão de litros de água.O óleo contamina o solo e o lençol freático e também o impermeabiliza, causando enchentes .O óleo contamina o solo e o lençol freático e também o impermeabiliza, causando enchentes .Na água, forma uma película superficial, altera o PH e diminui o oxigênio, provocando a morte de plantas e animais aquáticos.Desequilíbrio da quantidade de nutrientes, gerando a proliferação excessiva de algas e a eutrofização do ambiente.No solo, causa a impermeabilização das raízes das plantas, impedindo a absorção de nutrientes.')}></Button>
//         <Text style={{marginTop:10}}></Text>
//         <Button title='Noticia2' onPress={() => this.publicar( 'Prefeitura de cidade na BA notifica empresa por vazamento de óleo; 20 litros do material foram jogados no mar', 'https://imagenes.elpais.com/resizer/v2/RLQKIYST43M6KTT5FRPQXFVR34.jpg?auth=dd51ce49c3730e26d028286f2bee8c0e1e20d7edd8abb6d9d944c4cb45034f71&width=1200' , 'A nova área de contaminação na Bahia é a nova faceta da crise ambiental que atinge a região, cuja origem segue incerta. O Governo brasileiro diz ter comprovado que a origem do petróleo é venezuelano, mas ainda falta esclarecer as circunstâncias do desastre. O almirante Alexandre Rabello de Faria, chefe do Estado Maior do Comando de Operações Navais, informou nesta quinta em audiência pública na Comissão de Meio Ambiente do Senado que as investigações ainda não avançaram em relação ao que causou o derramamento do produto no mar. ')}></Button>
//         <Text style={{marginTop:10}}></Text>
//         <Button title='Noticia3' onPress={() => this.publicar ('Transformar oléo em matéria prima','https://istoe.com.br/istoegeral/wp-content/uploads/2025/01/sabao-de-oleo_1737389201007-750x375.jpg', 'Produzir sabão com óleo de cozinha usado é uma prática eco-friendly que alia economia, criatividade e preservação ambiental. Essa técnica evita que o óleo de cozinha seja descartado de forma inadequada, contribuindo para a redução de poluição nos corpos d água. Além disso, o sabão caseiro se mostra eficaz para diversas tarefas domésticas, sendo uma solução prática para aqueles que buscam adotar hábitos mais sustentáveis. Este artigo explora os fundamentos da produção de sabão com óleo usado, oferecendo um guia detalhado sobre como realizar este procedimento de forma simples e segura.')}></Button>
//         <Text style={{marginTop:10}}></Text>
//       </View>
//     );
// }
// }

// class Informacao extends Component{

//   render(){
//   return(
//     <View>
//      <Text style={{fontSize:18, color: '#F2AF00' , fontWeight:"bold", textAlign:'center'}}>{this.props.titulo}</Text>
//      <Image source ={{uri:this.props.imagem}} style={{width:300 , height:300}}></Image>
//      <Text> {this.props.texto}</Text>  
//     </View>
//   );
//   }
// }
// export default App;



class App extends Component{

  render(){
    return(
     
            <View style={estilos.area}>

<Image style = {estilos.logo} source={require('./Imagem4.png')}>
</Image>
 

               <ScrollView>
                    
              <View style = {estilos.title1}>
                <Text style = {estilos.titulo1}>Óleo de cozinha usado</Text>

              </View>
          
           <View style = {estilos.image1}>
              <Image style = {estilos.imagem1} source = {{uri:'https://s2-g1.glbimg.com/k6LEpOuA67bCnU057jMy--WWfmg=/0x0:1200x800/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/A/t/2kNa8yQSaCzVIBvhzWxg/oleo-de-cozinha-1-.jpg'}}></Image> 
              </View> 

              <View style={estilos.text1}>
              <Text style={estilos.texto1}>Um litro de óleo despejado nos rios polui até um milhão de litros de água.O óleo contamina o solo e o lençol freático e também o impermeabiliza, causando enchentes .O óleo contamina o solo e o lençol freático e também o impermeabiliza, causando enchentes .Na água, forma uma película superficial, altera o PH e diminui o oxigênio, provocando a morte de plantas e animais aquáticos.Desequilíbrio da quantidade de nutrientes, gerando a proliferação excessiva de algas e a eutrofização do ambiente.No solo, causa a impermeabilização das raízes das plantas, impedindo a absorção de nutrientes</Text>
              </View>

              <View style={estilos.title2}> 
              <Text style = {estilos.titulo2}>Prefeitura de cidade na BA notifica empresa por vazamento de óleo; 20 litros do material foram jogados no mar</Text>
              </View>

              <View style = {estilos.image2}>
              <Image style = {estilos.imagem2} source = {{uri: 'https://imagenes.elpais.com/resizer/v2/RLQKIYST43M6KTT5FRPQXFVR34.jpg?auth=dd51ce49c3730e26d028286f2bee8c0e1e20d7edd8abb6d9d944c4cb45034f71&width=1200'}}></Image>
              </View>

              <View style = {estilos.text2}>
              <Text style={estilos.texto2}>A nova área de contaminação na Bahia é a nova faceta da crise ambiental que atinge a região, cuja origem segue incerta. O Governo brasileiro diz ter comprovado que a origem do petróleo é venezuelano, mas ainda falta esclarecer as circunstâncias do desastre. O almirante Alexandre Rabello de Faria, chefe do Estado Maior do Comando de Operações Navais, informou nesta quinta em audiência pública na Comissão de Meio Ambiente do Senado que as investigações ainda não avançaram em relação ao que causou o derramamento do produto no mar.</Text>
              </View>

              <View style = {estilos.title3}>
              <Text style = {estilos.titulo3}>Transformar oléo em matéria prima</Text>
              </View>

              <View style = {estilos.image3}>
              <Image style = {estilos.imagem3} source = {{uri: 'https://istoe.com.br/istoegeral/wp-content/uploads/2025/01/sabao-de-oleo_1737389201007-750x375.jpg'}}></Image>
              </View>

              <View style = {estilos.text3}>
              <Text style = {estilos.texto3}>Produzir sabão com óleo de cozinha usado é uma prática eco-friendly que alia economia, criatividade e preservação ambiental. Essa técnica evita que o óleo de cozinha seja descartado de forma inadequada, contribuindo para a redução de poluição nos corpos d água. Além disso, o sabão caseiro se mostra eficaz para diversas tarefas domésticas, sendo uma solução prática para aqueles que buscam adotar hábitos mais sustentáveis. Este artigo explora os fundamentos da produção de sabão com óleo usado, oferecendo um guia detalhado sobre como realizar este procedimento de forma simples e segura.</Text> 

              </View> 

              </ScrollView> 

          
      </View>
    );
}
}






const estilos = StyleSheet.create({
  area: {
    flex: 1,
    //marginTop: 50,
    backgroundColor: '#DAA520',
    padding: 50,
    flexDirection: 'column',
    alignItems:'flex-start',
   

  },

  titulo:{
   textAlign:'center',

  },
  logo:{
    width: 250,
     height:250,
   
   
  },

  titulologo:{
   alignItems: 'flex-start'
  },

  textologo:{
   alignItems:'flex-end',
   backgroundColor: 'white'
  },

  titulo1:{
    fontSize: 29,
    color: 'black'
  },
  imagem1:{
    with:250,
    height:250,
    borderRadius: 10
  },

  texto1:{
   padding: 10,
  },

  titulo2:{
    fontSize: 29,
    color: 'black'
  },

  imagem2:{
    with:250,
    height:250,
    borderRadius: 10
  },

  texto2:{
    padding: 10,
   
   
  },

  titulo3:{
    fontSize: 29,
    color: 'black'
  },

  imagem3:{
    with:250,
    height:250,
    borderRadius: 10
  },

  texto3:{
    padding: 10,
    
  }









})




export default App;

// class App extends Component{

// render(){
//   return(
//     <View style = {estilos.area}>

      
//       <View style = {estilos.box1}>
//       <Text style = {estilos.textoPrincipal}>texto1</Text>
//       </View>

//       <View style = {estilos.box2}>
//       <Text style = {estilos.alinhaTexto}>texto2</Text>
//       </View>

//      <View style = {estilos.box3}>
//      <Text style = {[estilos.textoPrincipal , estilos.alinhaTexto]}>texto3</Text>
//      </View>
      
    
    
//     </View>
    

    
//   );
// }
// }

// const estilos = StyleSheet.create({
//   area: {
//     flex: 1,
//     marginTop: 50, 
//     backgroundColor: '#999',
//     padding: 25,
//     flexDirection: 'row',
//     justifyContent: "space-between",
//   },

//   box1: {
//     width: 100,
//     height: 300,
//     backgroundColor: 'green',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box2: {
//     width: 100,
//     height: 300,
//     backgroundColor: 'blue',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box3: {
//     width: 100,
//     height: 300,
//     backgroundColor: 'red',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

// })


// export default App;