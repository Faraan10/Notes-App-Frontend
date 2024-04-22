import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import modalReducer from "./slices/modalSlice";
import notesReducer from "./slices/notesSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		modal: modalReducer,
		notes: notesReducer,
	},
});

export default store;
