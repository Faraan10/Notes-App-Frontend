import Navbar from "./components/Navbar";
import HomeLayout from "./components/HomeLayout";
import Register from "./components/Register";
import Login from "./components/Login";
import SingleNote from "./components/SingleNote";
import Footer from "./components/Footer";
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
					<Route path="/:id" element={<SingleNote />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
