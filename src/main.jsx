import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<ToastContainer
				position="top-center"
				autoClose={1500}
				hideProgressBar={false}
				newestonTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				theme="colored"
			/>
		</Provider>
	</React.StrictMode>
);
