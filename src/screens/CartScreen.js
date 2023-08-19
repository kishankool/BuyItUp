import React,{useState,useEffect} from "react";
import { View, Text,StyleSheet,Pressable } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

import AsyncStorage from '@react-native-async-storage/async-storage';


const CartScreen = ({navigation}) => {

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
      <View style={styles.centered}>
      <Pressable style={{ flex: 1 , left: -150, top: 30  }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>
      <Text style={styles.title}>Cart Items</Text>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        {cartItems.map((item, index) => (
          <Text key={index}>{index}. {item}</Text>
        ))}
      </View>
    </View>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
});
