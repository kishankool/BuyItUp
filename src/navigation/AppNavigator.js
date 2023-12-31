import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import OTPScreen from "../screens/OTPScreen";
import LocationCheckScreen from "../screens/LocationCheckScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="RecipeList" component={RecipeListScreen} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
				<Stack.Screen name="OTPScreen" component={OTPScreen} />
				<Stack.Screen name="LocationScreen" component={LocationCheckScreen} />
				<Stack.Screen name="Cart" component={CartScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);``
};

export default AppNavigator;

const styles = StyleSheet.create({});
