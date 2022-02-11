import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { ExpenseMain } from "./Expenses/ExpenseMain";
import { FinanceMain } from "./FinancePlanner/Finance";
import { Login } from "./Auth/Login/Login";
import { InvestmentMain } from "./Investment/Investment";

import "./App.css";
import { Register } from "./Auth/Register/Register";

const UserContext = React.createContext(null);

function App() {
	const [user, setUser] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		let token = localStorage.getItem("token");
		token ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, []);

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setIsLoggedIn(false);
	};

	const login = () => {
		setIsLoggedIn(true);
	};
	return (
		<BrowserRouter>
			<Header isLoggedIn={isLoggedIn} handleLogout={logout} />
			<div
				style={{
					marginTop: "3rem",
					marginLeft: "1rem",
					width: "100vw",
					height: "100vh",
				}}
			>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/expense" element={<ExpenseMain />} />
					<Route path="/investment" element={<InvestmentMain />} />
					<Route path="/finance" element={<FinanceMain />} />
					<Route path="/login" element={<Login loginHandler={login} />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
