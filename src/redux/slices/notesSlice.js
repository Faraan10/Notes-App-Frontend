import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getData from "../api/getData";
import postData from "../api/postData";
import deleteData from "../api/deleteData";
import { toast } from "react-toastify";

const initialState = {
	notesData: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
	message: "",
};

export const getNotes = createAsyncThunk("get/notes", async () => {
	const response = await getData();
	return response;
});

export const getNotesSort = createAsyncThunk("get/notes", async () => {
	const response = await getData();

	const dates = response.map((date) => {
		return date;
	});

	const sortDates = dates.sort((a, b) => {
		let c = new Date(a.date);
		let d = new Date(b.date);
		if (c < d) {
			return 1;
		}
		if (c > d) {
			return -1;
		}
	});
	// console.log("sorted", sortDates);

	return sortDates;
});

export const createNotes = createAsyncThunk("post/notes", async (notesData) => {
	const response = await postData(notesData);
	console.log(response);
	if (response.createNotes) {
		toast.success(response.message);
	} else {
		toast.error(response.data.message);
		return;
	}
	return response;
});

export const deleteNotes = createAsyncThunk("delete/notes", async (id) => {
	const response = await deleteData(id);
	if (response.deleteNotes) {
		toast.success(response.message);
	} else {
		toast.error("Trouble deleting notes");
	}

	return response;
});

const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNotes.pending, (state) => {
			state.isLoading = true;
			state.isSuccess = false;
			state.isError = false;
		});
		builder.addCase(getNotes.fulfilled, (state, action) => {
			state.isLoading = false;
			state.notesData = action.payload;
			state.isSuccess = false;
			state.isError = false;
		});
		builder.addCase(getNotes.rejected, (state, action) => {
			state.isLoading = false;
			state.notesData = action.payload;
			state.isSuccess = false;
			state.isError = true;
		});
		builder.addCase(createNotes.pending, (state) => {
			state.isLoading = true;
			state.isSuccess = false;
			state.isError = false;
		});
		builder.addCase(createNotes.fulfilled, (state, action) => {
			state.isLoading = false;
			state.notesData.push(action.payload);
			state.isSuccess = true;
			state.isError = false;
		});
		builder.addCase(createNotes.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.isSuccess = false;
			state.message = action.payload;
		});
		builder.addCase(deleteNotes.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deleteNotes.fulfilled, (state, action) => {
			const { deleteNotes } = action.payload;
			const { _id } = deleteNotes;
			if (_id) {
				state.notesData = state.notesData.filter((note) => note._id !== _id);
				state.isLoading = false;
			}
		});
		builder.addCase(deleteNotes.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.isSuccess = false;
			state.message = action.payload;
		});
	},
});

export default notesSlice.reducer;
