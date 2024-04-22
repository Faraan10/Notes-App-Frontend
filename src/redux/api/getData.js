import axios from "axios";

const getData = async () => {
	const token = JSON.parse(localStorage.getItem("user"));
	// console.log(token);
	const response = await axios({
		url: "http://localhost:1050/notes/",
		method: "GET",
		headers: { "Content-Type": "application/json", token },
	});
	return response.data;
};

export default getData;
