import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CarrinhoContext } from './carrinhoContext';
import { useContext } from 'react';

export function CarrinhoScreen({ navigation }) {
  const [carrinho, setCarrinho] = useContext(CarrinhoContext);

  //inicializo o carrinho com uma lista vazia
  const itensCarrinho = carrinho || [];

  //atualizando o valor total do pedido com a lib reduce
  const totalPedido = itensCarrinho.reduce(
    (acumulador, produto) => acumulador + produto.preco,
    0
  );

  //função para finalizar o pedido e limpar o carrinho de compras
  const comprar = () => {
    if (itensCarrinho.length === 0) {
      alert('Adicione um lanche ao carrinho!');
      navigation.navigate('iFome');
    } else {
      alert('Pedido Concluído!');
      setCarrinho([]);

      navigation.navigate('iFome');
    }
  };

  return (
    <View style={style.global}>
      <FlatList
        data={carrinho}
        renderItem={({ item }) => (
          <View style={style.container}>
            <View style={style.teste}>
              <Text style={style.nome}>{item.nome}</Text>
              <Text style={style.descricao}>{item.descricao}</Text>
            </View>

            <Text style={style.preco}>
              {item.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </View>
        )}
      />

      <Text style={style.totalPedido}>Total do Pedido</Text>
      <Text style={style.valorPedido}>
        {totalPedido.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>

      <TouchableOpacity style={style.button} onPress={comprar}>
        <Text style={style.textButton}>COMPRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.buttonClear}
        onPress={() => (setCarrinho([]))}>
        <Text style={style.textButton}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  global: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    width: 350,
    height: 100,
  },

  teste: {},

  nome: {
    color: 'black',
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: 540,
  },

  descricao: {
    fontFamily: 'Arial',
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
  },

  preco: {
    fontFamily: 'Arial',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  totalPedido: {
    color: 'gray',
    fontFamily: 'Arial',
    fontSize: 18,
    marginBottom: 10,
  },

  valorPedido: {
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 25,
    marginBottom: 10,
  },

  button: {
    width: 350,
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    color: 'red',
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
  },

  buttonClear: {
    width: 150,
    height: 30,
    marginTop: 5,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
