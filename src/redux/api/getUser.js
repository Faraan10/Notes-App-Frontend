import axios from "axios";

const getUser = async () => {
	const token = JSON.parse(localStorage.getItem("user"));
	const response = await axios({
		url: "http://localhost:1050/auth/get",
		method: "GET",
		headers: { "Content-Type": "application/json", token },
	});
	return response.data;
};

export default getUser;
