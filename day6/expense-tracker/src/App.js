import React, { useState } from "react";

import "./App.css";
import {
	Investment,
	INVESTMENT_CATEGORY,
	INVESTMENT_FREQUENCY,
	INVESTMENT_TYPE,
} from "./models/Investment.model";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Expense } from "./models/Expense.model";
import { ExpenseManager } from "./components/Manager/ExpenseManager";
import { ExpenseList } from "./components/Expenses/ExpenseList";
import { ProfileForm } from "./components/Profile/ProfileForm";

function App() {
	let expenses = [
		new Expense(
			"Pizza for samaya",
			new Date("2022,2,2").toString(),
			"chandan",
			"general",
			499,
			TRANSACTION_TYPE.ONLINE.name,
		),
		new Expense(
			"Car Loan ",
			new Date("2022,2,5").toString(),
			"chandan",
			"credit",
			13400,
			TRANSACTION_TYPE.CREDIT.name,
		),
	];
	const [expense, setExpense] = useState({
		title: "",
		expDate: "",
		category: "Household Exp",
		amount: 0,
	});

	let products = [
		{
			code: "c001",
			name: "Demo product",
			category: "Some Category",
			quantity: 10,
		},
	];

	const onExpenseAdded = (value) => {
		console.log(value);
		expenses.push(value);
	};

	return (
		<div className="container">
			<ExpenseManager onExpCreated={onExpenseAdded} />
			<ExpenseList expenses={expenses} />
			{/* <ProfileForm /> */}
		</div>
	);
}

export default App;
