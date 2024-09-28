import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Card } from './componente';
import { useContext } from 'react';
import { CarrinhoContext } from './carrinhoContext';

export function HomeScreen({ navigation }) {
  const [carrinho, setCarrinho] = useContext(CarrinhoContext);

  const lanches = [
    {
      img: 'https://segredosdomundo.r7.com/wp-content/uploads/2015/09/o-que-um-big-mac-faz-com-seu-corpo-depois-de-1-hora.jpg',
      nome: 'Big - Mac',
      descricao: 'McDonalds - Kobrasol',
      preco: 26.99,
    },

    {
      img: 'https://static.ifood-static.com.br/image/upload/t_high/pratos/906ad191-ea56-46d9-88da-4219ef48b8ef/202004100957_tJXv_6.png',
      nome: 'Subway - Churrasco',
      descricao: 'Subway - Palhoça',
      preco: 20.9,
    },

    {
      img: 'https://admin.minikalzone.com.br/uploads/product/49/619bd542a77043.97261489.jpg',
      nome: 'Mini Kalzone - Nutella',
      descricao: 'Kalzone - São José',
      preco: 8.99,
    },

    {
      img: 'https://static.ifood-static.com.br/image/upload/t_high/pratos/91fa9f4f-3610-41e9-b2ee-de6a3731c57e/202307311556_0ldoen406woq.png',
      nome: 'Coca-Cola 350ml',
      descricao: 'Adicional - Bebida',
      preco: 5.9,
    },

    {
      img: 'https://static.wixstatic.com/media/accaff_b54c7dcd5f5544ff8f1faafff9beab11~mv2.png/v1/fill/w_640,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/accaff_b54c7dcd5f5544ff8f1faafff9beab11~mv2.png',
      nome: 'Água Mineral 510ml',
      descricao: 'Adicional - Bebida C/S gás',
      preco: 4.5,
    },
  ];

  //inicializo o carrinho com uma lista vazia
  const itensCarrinho = carrinho || [];

  //adiciona o produto selecionado ao carrinho
  const adicionarProduto = (produto) => {
    setCarrinho([...itensCarrinho, produto]);
  };

  //atualiza o número de produtos no carrinho
  const qtdProduto = carrinho ? carrinho.length : 0;

  return (
    <View style={style.global}>
      <View style={style.container}>
        <View>
          <TouchableOpacity
            style={style.carrinho}
            onPress={() => navigation.navigate('Carrinho')}>
            <Image
              style={style.iconeCarrinho}
              source={{
                uri: 'https://img.freepik.com/icones-gratis/carrinho-de-compras_318-301460.jpg',
              }}
            />

            <Text style={style.textoCarrinho}>
              {qtdProduto} {qtdProduto === 1 ? 'item' : 'itens'}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={lanches}
          renderItem={({ item }) => (
            <Card
              img={item.img}
              nome={item.nome}
              descricao={item.descricao}
              preco={item.preco.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
              buttonComprar={() => adicionarProduto(item)}
            />
          )}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  global: {
    alignItems: 'center',
  },

  container: {
    display: 'flex',
    alignItems: 'flex-end',
  },

  carrinho: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    gap: 5,
    alignItems: 'center',
  },

  iconeCarrinho: {
    width: 30,
    height: 30,
  },

  textoCarrinho: {
    color: 'red',
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
