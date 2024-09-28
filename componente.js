import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function Card({ img, nome, descricao, preco, buttonComprar }) {
  return (
    <View style={style.container}>
      <Image style={style.img} source={{ uri: img }} />
      <View style={style.cards}>
        <Text style={style.nome}> {nome} </Text>
        <Text style={style.descricao}> {descricao} </Text>
        <Text style={style.preco}> {preco} </Text>
        <TouchableOpacity style={style.buttons} onPress={buttonComprar}>
          <Text style={style.textButton}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
    width: 350,
    height: 170,
  },

  cards: {},

  img: {
    width: 110,
    height: 90,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 10,
  },

  nome: {
    color: 'black',
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: 540,
    marginTop: 15,
    marginLeft: 20,
  },

  descricao: {
    fontFamily: 'Arial',
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 20,
  },

  preco: {
    fontFamily: 'Arial',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },

  buttons: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    width: 120,
    height: 40,
    marginTop: 10,
    marginLeft: 20,
  },

  textButton: {
    color: 'red',
    fontFamily: 'Arial',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 500,
  },
});
