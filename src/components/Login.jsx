import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUserAsync,
  getUserAsync,
  sendOtpAsync,
  verifyOtpAsync,
} from "../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isSuccess } = useSelector((state) => state.auth);

  const [info, setInfo] = useState({ email: "", password: "" });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [useOtp, setUseOtp] = useState(false);

  const { email, password } = info;

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handlePasswordLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserAsync(info));
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    dispatch(sendOtpAsync({ email }));
    setIsOtpSent(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOtpAsync({ email, otp }));
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    token && dispatch(getUserAsync());
    if (token) {
      navigate("/");
    }
  }, [user, isSuccess]);

  return (
    <section className="login">
      <div className="wrapper card">
        <form
          onSubmit={
            useOtp
              ? isOtpSent
                ? handleOtpSubmit
                : handleSendOtp
              : handlePasswordLogin
          }
          style={{ padding: "10px" }}
        >
          <h2 style={{ fontSize: "36px" }}>Login</h2>
          <div className="input-box">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          {!useOtp ? (
            <>
              <div className="input-box">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <input
                type="submit"
                className="submit"
                value="Login"
                style={{ fontWeight: "bold" }}
              />
            </>
          ) : isOtpSent ? (
            <>
              <div className="input-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  required
                  name="otp"
                  value={otp}
                  onChange={handleOtpChange}
                />
              </div>
              <input
                type="submit"
                className="submit"
                value="Verify OTP"
                style={{ fontWeight: "bold" }}
              />
            </>
          ) : (
            <button type="submit" className="submit">
              Send OTP
            </button>
          )}
          <p
            style={{ marginTop: "15px", cursor: "pointer" }}
            onClick={() => setUseOtp(!useOtp)}
          >
            {useOtp ? (
              <p style={{ fontWeight: "bold", margin: "30px" }}>
                Login with Password Instead
              </p>
            ) : (
              <p style={{ fontWeight: "bold", margin: "30px" }}>
                Login with OTP Instead
              </p>
            )}
          </p>
          <div style={{ margin: "30px 0px", textAlign: "left" }}>
            <p>
              New to Notes?
              <Link
                to="/register"
                style={{ textDecoration: "none", marginLeft: "5px" }}
              >
                Sign up now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
