import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ProductScreen from "./src/screens/ProductScreen";

const App = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={SearchScreen}
					options={{
						title: "Food Vally",
						headerTitleAlign: "center",
						headerStyle: {
							//backgroundColor: "#FF3333",
						},
					}}
				/>
				<Stack.Screen name="Foods" component={ProductScreen} options={{title: "Details"}} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
