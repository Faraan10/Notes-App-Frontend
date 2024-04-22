import axios from "axios";
import url from "../../constants";

const deleteData = async (id) => {
	const token = JSON.parse(localStorage.getItem("user"));
	const response = await axios({
		url: `${url}/notes/delete/${id}`,
		method: "DELETE",
		headers: { "Content-Type": "application/json", token },
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default deleteData;
