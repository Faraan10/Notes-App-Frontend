import axios from "axios";

const deleteData = async (id) => {
	const token = JSON.parse(localStorage.getItem("user"));
	const response = await axios({
		url: `http://localhost:1050/notes/delete/${id}`,
		method: "DELETE",
		headers: { "Content-Type": "application/json", token },
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default deleteData;
