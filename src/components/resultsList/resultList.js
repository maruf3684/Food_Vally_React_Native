import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import ResultDetail from "./ResultDetail";


const ResultList = ({ title, results, navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>{title}</Text>

			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={()=>navigation.navigate('Foods',{id:item.id})}>
							<ResultDetail item={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default ResultList;

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5,
		color: "#FF4500",
	},
	container: {
		marginBottom: 10,
	},
});
