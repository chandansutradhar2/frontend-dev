import { useState } from "react";
import { AddExpense } from "./AddExpense/AddExpense";

export function ExpenseMain() {
	// const [expenses, setExpenses] = useState();
	// const [expense, setExpense] = useState();

	return (
		<div
			style={{
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<AddExpense />
		</div>
	);
}
