import axios from "axios";
import url from "../../constants";

const getSingleNote = async (id) => {
	const token = JSON.parse(localStorage.getItem("user"));
	// console.log(token);
	const response = await axios({
		url: `${url}/notes/${id}`,
		method: "GET",
		headers: { "Content-Type": "application/json", token },
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default getSingleNote;
