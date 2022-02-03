import "./ExpenseItem.css";
import React, { useState } from "react";

export const ExpenseItem = (props) => {
	const [amount, setAmount] = useState(props.expense.amount);
	const [title, setTile] = useState(props.expense.title);
	const [expDate, setExpDate] = useState(props.expense.expDate);

	//DO NOT CHANGE PROPS DIRECTLY EVEN IF ITS AN OBJECT
	// console.log(props.expense.amount);

	// setTimeout(() => {
	// 	setAmount(amount + 500);
	// 	console.log("new value", props.expense.amount);
	// }, 5000);

	let date = new Date(expDate);
	let month = date.toLocaleDateString("default", { month: "short" });
	let day = date.toLocaleDateString("default", { day: "2-digit" });
	return (
		<div style={{ margin: "0.5rem", padding: "0.5rem" }}>
			<div className="expense">
				<div>
					<i className="pi pi-calendar"></i>
					<span>{day}</span>&nbsp;
					<strong>{month}</strong>
				</div>
				<div>{title}</div>
				<div>&#8377; {amount}</div>
			</div>
		</div>
	);
};
