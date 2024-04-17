import Navbar from "./components/Navbar";
import HomeLayout from "./components/HomeLayout";
import Register from "./components/Register";
import Login from "./components/Login";
import Notes from "./components/Notes";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomeLayout />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/notes" element={<Notes />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
