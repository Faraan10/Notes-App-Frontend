import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slices/authSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, userData } = useSelector((state) => state.auth);

	const remove = () => {
		dispatch(removeUser());
		navigate("/login");
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body" data-bs-theme="dark">
				<div className="container-fluid">
					<Link className="navbar-brand" style={{ fontSize: "32px" }}>
						Notes App
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

						<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
							{userData !== null ? (
								<li className="nav-item dropstart" style={{ marginRight: "10px", fontSize: "18px" }}>
									<a className="nav-link active " role="button" data-bs-toggle="dropdown" aria-expanded="false">
										<FaUser /> Profile
									</a>
									<ul className="dropdown-menu">
										<li>
											<a className="dropdown-item">{userData && userData.name}</a>
										</li>
										<li>
											<a className="dropdown-item">{userData && userData.email}</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a className="dropdown-item" onClick={remove}>
												Sign out
											</a>
										</li>
									</ul>
								</li>
							) : (
								<>
									<li className="nav-item">
										<Link to="/login" className="nav-link active" aria-current="page">
											<FaSignInAlt style={{ marginRight: "5px" }} />
											Log In
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/register" className="nav-link active" aria-current="page">
											<FaUser style={{ marginRight: "5px" }} />
											Sign Up
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
