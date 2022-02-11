import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import { ExpenseMain } from "./Expenses/ExpenseMain";
import { FinanceMain } from "./FinancePlanner/Finance";
import { Login } from "./Auth/Login/Login";
import { InvestmentMain } from "./Investment/Investment";

import "./App.css";

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
					<Route path="/investment" element={<InvestmentMain />} />
					<Route path="/finance" element={<FinanceMain />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
