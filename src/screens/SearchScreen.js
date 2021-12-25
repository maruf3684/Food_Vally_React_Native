import React, { useState } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import ResultList from "../components/resultsList/resultList";
import SearchBer from "../components/searchber/SearchBer";
import useResults from "../hooks/useResults";

const SearchScreen = ({navigation}) => {

	const [term, setTerm] = useState("");
	const [searchApi, results, error] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<View style={{ flex: 1 }}>
			<StatusBar animated={true} backgroundColor="#61dafb" />
			<SearchBer
				term={term}
				onTermChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{error ? (
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text>{error}</Text>
				</View>
			) : (
				<ScrollView showsVerticalScrollIndicator={false}>
					{filterResultsByPrice("$").length ? (
						<ResultList
							results={filterResultsByPrice("$")}
							title="Cose Effective"
							navigation={navigation}
						/>
					) : null}

					{filterResultsByPrice("$$").length ? (
						<ResultList
							results={filterResultsByPrice("$$")}
							title="Bit Pricer"
                            navigation={navigation}
						/>
					) : null}

					{filterResultsByPrice("$$$").length ? (
					
						<ResultList
							results={filterResultsByPrice("$$$")}
							title="Big Spender"
                            navigation={navigation}
						/>
						
					) : null}

					{filterResultsByPrice("$").length ? (
						<ResultList
							results={filterResultsByPrice("$")}
							title="For Gorib"
                            navigation={navigation}
						/>
					) : null}

				</ScrollView>
			)}
		</View>
	);
};

export default SearchScreen;
