import  { useState ,useEffect} from "react";
import instance from "../api/yelp";

export default ()=>{
    const [results,setResults] = useState([])
	const [error,setError]=useState("")

	const searchApi=async (searchTerm) => {
		searchTerm=searchTerm===""?'fish':searchTerm
		try{
			const response = await instance.get('/search',{
				params:{
					limit:50,
					term:searchTerm,
					location:'san jose'
				}
			})
			setResults((results)=>[results,...response.data.businesses])
			setError("")
		}catch(e){
			console.log(e);
			setError('No Internet Connection')
		}
	}

	useEffect(()=>{
		searchApi('fish')
	},[])

    return[searchApi,results,error]
}