import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home';
import { CarrinhoScreen } from './carrinho';
import { CarrinhoContext } from './carrinhoContext';
import { useState } from 'react';
  
export default function App() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerStyle: {
      backgroundColor: 'red',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'Arial',
    },
  };

  const [carrinho, setCarrinho] = useState();

  return (
    <CarrinhoContext.Provider value={[carrinho, setCarrinho]}>
      <NavigationContainer>
        <Stack.Navigator initialRoute="HomeScreen">
          <Stack.Screen
            name="iFome"
            component={HomeScreen}
            options={screenOptions}
          />

          <Stack.Screen
            name="Carrinho"
            component={CarrinhoScreen}
            options={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CarrinhoContext.Provider>
  );
}
