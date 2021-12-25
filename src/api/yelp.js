import axios from "axios";

const instance =  axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	timeout: 1000,
	headers: {
		Authorization:
			"Bearer OqSkObDYdyj90mbKoKTHZfDKapxWi8Ts8rHtIJ8vOdpx06oQLuaL4vXi4NHicKAPayJsSG_uVYFhQDdVMrE0SGkAQ68Ks2OZhv9Imysmb9rEjH2jhGsAwDX2eJvEYXYx",
	},
});

export default instance