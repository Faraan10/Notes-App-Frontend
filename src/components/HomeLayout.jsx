import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import data from "./Map";

const HomeLayout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("user");
		console.log(token);
		if (token === null || token === undefined) {
			navigate("/login");
		}
	}, []);

	const [info, setInfo] = useState(data);

	const updateData = () => {};

	const deleteData = () => {};
	return (
		<section>
			<div className="container" style={{ marginTop: "5%" }}>
				<div className="row">
					{info.map((item) => (
						<div key={item._id} className="note card col-sm-12 col-md-6 col-lg-4">
							<h1>{item.title}</h1>
							<p>{item.content}</p>
							<div className="align-buttons">
								<i
									className="fa-regular align fa-pen-to-square fa-lg"
									style={{ color: "blue" }}
									onClick={() => updateData()}
								></i>
								<i className="fa-solid fa-trash align fa-lg" style={{ color: "red" }} onClick={() => deleteData()}></i>
							</div>
						</div>
					))}
				</div>
			</div>
			<button className="btn add__btn">
				<BsPlusLg style={{ fontSize: "18px" }} />
			</button>
		</section>
	);
};

export default HomeLayout;
