import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAsync, getUserAsync } from "../redux/slices/authSlice";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isSuccess, isError } = useSelector((state) => state.auth);

	const [info, setInfo] = useState({
		email: "",
		password: "",
	});

	const { email, password } = info;

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(loginUserAsync(info));
	};

	useEffect(() => {
		const token = localStorage.getItem("user");

		token && dispatch(getUserAsync());
		if (token) {
			navigate("/");
		}
	}, [user, isSuccess]);

	useEffect(() => {
		const token = localStorage.getItem("user");

		token && dispatch(getUserAsync());
	}, []);

	return (
		<>
			<section className="login">
				<div className="wrapper card">
					<form onSubmit={handleSubmit} style={{ padding: "10px" }}>
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
						<div className="input-box">
							<input
								type="current-password"
								className="form-control"
								placeholder="Enter your password"
								required
								name="password"
								value={password}
								onChange={handleChange}
							/>
						</div>
						<input type="submit" className="submit" value="Login" style={{ fontWeight: "bold" }} />
						<div style={{ margin: "30px 0px", textAlign: "left" }}>
							<p>
								New to Notes?
								<Link to="/register" style={{ textDecoration: "none", marginLeft: "5px" }}>
									Sign up now
								</Link>
							</p>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Login;
