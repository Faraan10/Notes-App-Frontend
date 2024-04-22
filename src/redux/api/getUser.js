import axios from "axios";
import url from "../../constants";

const getUser = async () => {
	const token = JSON.parse(localStorage.getItem("user"));
	const response = await axios({
		url: `${url}/auth/get`,
		method: "GET",
		headers: { "Content-Type": "application/json", token },
	});
	return response.data;
};

export default getUser;
