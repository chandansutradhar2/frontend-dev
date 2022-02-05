import React, { useState, useEffect } from "react";

import "./App.css";
import {
	Investment,
	INVESTMENT_CATEGORY,
	INVESTMENT_FREQUENCY,
	INVESTMENT_TYPE,
} from "./models/Investment.model";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Expense, TRANSACTION_TYPE } from "./models/Expense.model";
import { ExpenseManager } from "./components/Manager/ExpenseManager";
import { ExpenseList } from "./components/Expenses/ExpenseList";
import { ProfileForm } from "./components/Profile/ProfileForm";
import { Login } from "./components/Auth/Login/Login";
function App() {
	let expenseArr = [
		new Expense(
			"Pizza for samaya",
			new Date("2022,2,2"),
			"chandan",
			"Child's Exp",
			499,
		),
		new Expense(
			"Car Loan ",
			new Date("2022,2,5"),
			"chandan",
			"Travelling Exp",
			13400,
		),
	];

	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [expense, setExpense] = useState();
	const [filteredExpenses, setFilteredExpenses] = useState(expenseArr);
	const [expenses, setExpenses] = useState(expenseArr);

	const onExpenseAdded = (value) => {
		//check if the item exists inside the array

		let idx = expenses.findIndex((item) => {
			return item.title == value.title && item.amount == value.amount
				? true
				: false;
		});

		if (idx !== -1) {
			//item already exists in the expenses array
			return;
		}
		//1- create a copy of state array
		const expensesCopy = expenses.slice();
		//2- create a new element inside the cloned copy
		let newExp = new Expense(
			value.title,
			value.expDate,
			value.createdBy,
			value.category,
			value.amount,
		);
		expensesCopy.push(newExp);
		//3 - useState to update new State
		setExpenses(expensesCopy);
		//we need to do expenses.push(newExp); //but this is going to mutate expenses
		//setExpenses(expenses.push(newExp)) //Not work cause we are mutating array
		//setExpenses((prevState)=>expenses.map(comparer logic and function))//will not work cause of overhead
	};

	const onEditEventRecieved = (value) => {
		setExpense(expenses[value]);
	};

	const onFilteredEvent = (filteredExp) => {
		const tmpFilteredExpenseCopy = filteredExp;
		setFilteredExpenses(tmpFilteredExpenseCopy);
		debugger;
	};

	const clearFilterEvent = () => {
		alert("event recieved from expenseList");
		setFilteredExpenses(expenses);
	};

	const renderUI = () => {
		if (isLoggedIn) {
			return (
				<>
					<ExpenseManager expense={expense} onExpCreated={onExpenseAdded} />
					<ExpenseList
						editHandler={onEditEventRecieved}
						expenses={filteredExpenses}
						filterEvent={onFilteredEvent}
						clearFilterEvent={clearFilterEvent}
					/>{" "}
				</>
			);
		} else {
			return <Login />;
		}
	};

	return (
		<div className="container">
			{renderUI()}
			{/* <ExpenseManager expense={expense} onExpCreated={onExpenseAdded} />
			<ExpenseList
				editHandler={onEditEventRecieved}
				expenses={filteredExpenses}
				filterEvent={onFilteredEvent}
				clearFilterEvent={clearFilterEvent}
			/> */}
			{/* <ProfileForm /> */}
		</div>
	);
}

export default App;
