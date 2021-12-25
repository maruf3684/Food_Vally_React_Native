import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import instance from "../api/yelp";

const ProductScreen = ({ route, navigation }) => {
	const { id } = route.params;
	const [product, setProduct] = useState(null);

	const getresult = async (id) => {
		const response = await instance.get(`/${id}`);
		setProduct(response.data);
	};

	useEffect(() => {
		getresult(id);
	}, []);

	if (!product) {
		return null;
	}
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{product.name}</Text>
			<FlatList
				data={product.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>

			<View>
            <Text style={{fontWeight: 'bold',fontSize: 20,marginTop:5}}>Details:</Text>
				<Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
					esse quo officia! Nesciunt, harum porro deserunt repellendus non,e
					sapiente omnis molestiae ipsum ducimus hic nobis illum mollitia fu
					veritatis?

				</Text>
			</View>
		</View>
	);
};

export default ProductScreen;
const styles = StyleSheet.create({
	image: {
		width: 250,
		height: 120,
		borderRadius: 4,
		marginVertical: 8,
	},
	name: {
		fontWeight: "bold",
		fontSize: 25,
		color: "red",
		marginVertical: 5,
	},
	container: {
		flex: 1,
		alignItems: "center",
		marginHorizontal:50,
        marginBottom:50,
	},
    text: {
        marginVertical:5,
    }
});
