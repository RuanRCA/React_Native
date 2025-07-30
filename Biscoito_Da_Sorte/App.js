import React , {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      imagem: require('./src/biscoito.png'),
    };
    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }
  quebrarBiscoito() {
    if (this.state.textoFrase !== '') {
      this.setState({
        textoFrase: '',
        imagem: require('./src/biscoito.png'),
      });
    }
    else {
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      this.setState({
        textoFrase:'"' + this.frases[numeroAleatorio] + '"',
        imagem: require('./src/biscoitoAberto.png'),
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imagem} source={this.state.imagem} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>{this.state.textoFrase === '' ? 'Quebrar Biscoito?' : 'Voltar'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  botao: {
    width: 250,
    height: 50,
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    alignItems: 'center',
    borderColor: '#dd7b22',
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto: {
    fontSize: 20,
    color: '#dd7b22',
    fontWeight: 'bold',
  },
});
export default App;


