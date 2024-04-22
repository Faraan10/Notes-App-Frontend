import axios from "axios";
import url from "../../constants";

const loginUser = async (data) => {
	const response = await axios({
		url: `${url}/auth/login`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default loginUser;
