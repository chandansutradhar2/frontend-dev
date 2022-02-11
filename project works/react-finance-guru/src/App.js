import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { ExpenseMain } from "./Expenses/ExpenseMain";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div
				style={{
					marginTop: "3rem",
					marginLeft: "1rem",
					width: "100vw",
					height: "100vh",
				}}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/expense" element={<ExpenseMain />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
