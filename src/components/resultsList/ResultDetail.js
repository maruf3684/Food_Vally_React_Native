import React from 'react'
import { View, Text, StyleSheet ,Image } from "react-native";

const ResultDetail = (props) => {
    const {item}=props;
    return (
        <View style={styles.container}>
           <Image style={styles.image} source={{uri:item.image_url}}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text>
                {item.rating} Stars, {item.review_count} Reviews
            </Text>
        </View>
    )
}

export default ResultDetail

const styles = StyleSheet.create({
	image: {
		width:250,
        height:120,
		borderRadius:4,
	},
    name:{
        fontWeight:'bold',
        fontSize:16,
    },
    container:{
    marginLeft:15,
    }
});