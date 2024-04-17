import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { registerUserAsync, reset } from "../redux/slices/authSlice";

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.auth);

	const [info, setInfo] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { name, email, password, confirmPassword } = info;

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};
	// console.log(info);
	console.log(user);
	console.log(user?.createUser);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(info);
		if (password !== confirmPassword) {
			toast.error("Password should match");
			return;
		} else {
			dispatch(registerUserAsync(info));
			if (user || user.createUser) {
				navigate("/login");
			}
			dispatch(reset());
		}
	};

	return (
		<>
			<section className="register">
				<div className="wrapper card">
					<form onSubmit={handleSubmit} style={{ padding: "10px" }}>
						<h2 style={{ fontSize: "36px" }}>Register</h2>
						<div className="input-box">
							<input
								type="text"
								className="form-control"
								name="name"
								value={name}
								onChange={handleChange}
								placeholder="Enter your name"
								required
							/>
						</div>
						<div className="input-box">
							<input
								type="email"
								className="form-control"
								name="email"
								value={email}
								onChange={handleChange}
								placeholder="Enter your email"
								required
							/>
						</div>
						<div className="input-box">
							<input
								type="current-password"
								className="form-control"
								name="password"
								value={password}
								onChange={handleChange}
								placeholder="Enter your password"
								required
							/>
						</div>
						<div className="input-box">
							<input
								type="current-password"
								className="form-control"
								name="confirmPassword"
								value={confirmPassword}
								onChange={handleChange}
								placeholder="Enter confirm password"
								required
							/>
						</div>
						<input type="submit" className="submit" value="Register" style={{ fontWeight: "bold" }} />
						<div style={{ margin: "30px 0px", textAlign: "left" }}>
							<p>
								Already have an account?
								<Link to="/login" style={{ textDecoration: "none", marginLeft: "5px" }}>
									Login now
								</Link>
							</p>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Register;
