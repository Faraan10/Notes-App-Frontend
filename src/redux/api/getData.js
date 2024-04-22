import axios from "axios";
import url from "../../constants";

const getData = async () => {
	const token = JSON.parse(localStorage.getItem("user"));
	// console.log(token);
	const response = await axios({
		url: `${url}/notes`,
		method: "GET",
		headers: { "Content-Type": "application/json", token },
	});
	return response.data;
};

export default getData;
