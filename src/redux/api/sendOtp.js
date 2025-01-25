import axios from "axios";
import url from "../../constants";

const sendOtp = async (data) => {
  const response = await axios({
    url: `${url}/auth/login/request-otp`,
    // url: "http://localhost:5000/auth/login/request-otp",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(data),
  })
    .then((response) => response.data)
    .catch((err) => err.response);
  return response;
};

export default sendOtp;
