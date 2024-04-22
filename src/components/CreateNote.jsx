import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNotes } from "../redux/slices/notesSlice";

import { Button, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const CreateNote = () => {
	const dispatch = useDispatch();

	const [info, setInfo] = useState({
		title: "",
		description: "",
		imageUrl: "",
	});

	const { title, description, imageUrl } = info;

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(info);
		dispatch(createNotes(info));
		setInfo({
			title: "",
			description: "",
			imageUrl: "",
		});
	};

	return (
		<>
			<div className="note_container">
				<DialogTitle>Create Note</DialogTitle>
				<form onSubmit={handleSubmit}>
					<DialogContent>
						<div className="mb-3">
							<label htmlFor="title" className="form-label">
								Title
							</label>
							<TextField fullWidth hiddenLabel size="small" name="title" value={title} onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label htmlFor="description" className="form-label">
								Description
							</label>
							<TextField fullWidth multiline rows={3} name="description" value={description} onChange={handleChange} />
						</div>
						<div className="mb-3">
							<label htmlFor="tag" className="form-label">
								Image Url
							</label>
							<TextField fullWidth hiddenLabel size="small" name="imageUrl" value={imageUrl} onChange={handleChange} />
						</div>
					</DialogContent>
					<DialogActions>
						<Link to="/">
							<Button variant="contained" color="error">
								Close
							</Button>
						</Link>
						<Button variant="contained" type="submit" color="success">
							Add
						</Button>
					</DialogActions>
				</form>
			</div>
		</>
	);
};

export default CreateNote;
