import React,{useState,useEffect} from "react";
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CartScreen = ({}) => {

  const [cartItems, setCartItems] = useState 	([]);

  useEffect(() => {
		loadCartItems();
	  }, []);

	const loadCartItems = async () => {
			try {
			const storedCartItems = await AsyncStorage.getItem('cartItems');
			if (storedCartItems !== null) {
				setCartItems(JSON.parse(storedCartItems));
			}
			} catch (error) {
			console.error('Error loading cart items:', error);
			}
		};
  

  return (
    <>
      <Text>Cart Screen</Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        {cartItems.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View>
    </View>
    </>
  );
};

export default CartScreen;
