import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { InvestmentView } from "./components/Investment/Investment";
import { FinanceView } from "./components/FinancePlanner/FinancePlanner";
import { ProfileForm } from "./components/Profile/ProfileForm";
import { ExpenseList } from "./components/Expenses/ExpenseList";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="expense" element={<ExpenseList expenses={[]} />} />
				<Route path="investment" element={<InvestmentView />} />
				<Route path="finance" element={<FinanceView />} />
				<Route path="profile" element={<ProfileForm />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
