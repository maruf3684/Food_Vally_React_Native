import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBer = (props) => {
	const { term, onTermChange, onTermSubmit } = props;

	return (
		<View style={styles.background}>
			<Feather style={styles.iconStyle} name="search" />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				onChangeText={(e) => onTermChange(e)}
				onEndEditing={() => onTermSubmit()}
			/>
		</View>
	);
};

export default SearchBer;

const styles = StyleSheet.create({
	background: {
		marginTop: 15,
		backgroundColor: "white",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginBottom:15,
	},
	inputStyle: {
		// borderEndColor:"black",
		// borderWidth:1,
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		marginHorizontal: 15,
		fontSize: 35,
		alignSelf: "center",
	},
});
