import axios from "axios";
import url from "../../constants";

const verifyOtp = async (data) => {
  const response = await axios({
    url: `${url}/auth/login/verify-otp`,
    // url: "http://localhost:5000/auth/login/verify-otp",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify(data),
  })
    .then((response) => response.data)
    .catch((err) => err.response);
  return response;
};

export default verifyOtp;
