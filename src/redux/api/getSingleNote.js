import axios from "axios";

const getSingleNote = async (id) => {
	const token = JSON.parse(localStorage.getItem("user"));
	// console.log(token);
	const response = await axios({
		url: `http://localhost:1050/notes/${id}`,
		method: "GET",
		headers: { "Content-Type": "application/json", token },
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default getSingleNote;
