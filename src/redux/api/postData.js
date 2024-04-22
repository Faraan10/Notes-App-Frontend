import axios from "axios";

const postData = async (data) => {
	const token = JSON.parse(localStorage.getItem("user"));
	const response = await axios({
		url: "http://localhost:1050/notes/create/",
		method: "POST",
		headers: { "Content-Type": "application/json", token },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default postData;
