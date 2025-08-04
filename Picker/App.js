import { Component } from 'react';
 import { StyleSheet, Text, View, Switch} from 'react-native';

 import {Picker} from '@react-native-picker/picker';
 import Slider from '@react-native-community/slider';

 class app extends Component {

  constructor(props){
    super (props);
    this.state={
      valorSlider:0,
      valorSwitch:false,
      pizza:0,
      pizzas: [
        {key:1, nome:'Calabreza' , valor: 35.90},
        {key:2, nome:'Muzzarela' , valor: 59},
        {key:3, nome:'Quatro-queijos' , valor: 37},
        {key:4, nome:'Frango Catupiry' , valor: 25.90},
        {key:5, nome:'Portuguesa' , valor: 70},
        {key:6, nome:'Brigadeiro' , valor: 27}
        
        
      ]
    };
  };
  render(){
    let pizzaItens= this.state.pizzas.map((v)=>{
    return  <Picker.Item key={v.key} value={v.key} label= {v.nome}></Picker.Item>
    });
    return(
      <View style = {styles.container}>

        <Text style = {styles.menu}>Menu Pizza</Text>

        <Picker
        selectedValue={this.state.pizza}
        onValueChange={(itemValor)=>this.setState({pizza: itemValor})}>

<Picker.item label="Escolha o sabor da pizza" enabled={false}></Picker.item>
{pizzaItens}
        
        </Picker>

        <Text style = {styles.pizza}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style= {styles.pizza} > R$ {this.state.pizzas [this.state.pizza].valor.toFixed(2)} </Text>

        <Text style = {styles.pizza}>Troco Para: R$ {this.state.valor} </Text>

        <Slider value={this.state.valor}
        onValueChange={(valorSlider)=> this.setState({valor:valorSlider})}
        minimumValue={0}
        maximumValue={100}
        step={10}
        minimumTrackTintColor='green'
        maximumTrackTintColor='red'
        >
          
        </Slider>

        <Text style = {styles.valor}>Valor:{this.state.valor}</Text>

        <View style = {styles.switch}>

          <Text style = {styles.valor}>Borda Rechaeada</Text>

          <Switch 

          value = {this.state.valorSwitch}
          onValueChange={(valorSelecionado)=> this.setState({valorSwitch:valorSelecionado})}
          >
          </Switch>
          <Text style = {styles.valor}>
            {(this.state.valorSwitch)? 'Sim' :'Não'}
          </Text>

          

        </View>


      </View>

    );
  }
 }

 const styles = StyleSheet.create({
   container:{
    flex:1,
    MarginTop: 20,
    margin: 10
   },
   menu: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold'
   },

   pizza:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10

   },

   valor:{
    margin:10,
    fontSize:20,
   },

   switch:{
    margin:10,
    flexDirection: 'row'
   }

 });

 export default app;
