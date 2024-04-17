import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const HomeLayout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("user");
		console.log(token);
		if (token === null || token === undefined) {
			navigate("/login");
		}
	}, []);
	return (
		<div>
			<h1>HomeLayout</h1>
		</div>
	);
};

export default HomeLayout;
