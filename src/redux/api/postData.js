import axios from "axios";
import url from "../../constants";

const postData = async (data) => {
	const token = JSON.parse(localStorage.getItem("user"));
	const response = await axios({
		url: `${url}/notes/create/`,
		method: "POST",
		headers: { "Content-Type": "application/json", token },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default postData;
