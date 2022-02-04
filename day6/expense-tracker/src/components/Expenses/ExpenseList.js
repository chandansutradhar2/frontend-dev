import { ExpenseItem } from "./ExpenseItem";
import { Card } from "primereact/card";
import { Expense, TRANSACTION_TYPE } from "../../models/Expense.model";
export const ExpenseList = () => {
	// let expenses = [
	// 	new Expense(
	// 		"Pizza for samaya",
	// 		new Date("2022,2,2").toString(),
	// 		"chandan",
	// 		"general",
	// 		499,
	// 		TRANSACTION_TYPE.ONLINE.name,
	// 	),
	// 	new Expense(
	// 		"Car Loan ",
	// 		new Date("2022,2,5").toString(),
	// 		"chandan",
	// 		"credit",
	// 		13400,
	// 		TRANSACTION_TYPE.CREDIT.name,
	// 	),
	// ];
	return (
		<div style={{ marginTop: "2rem" }}>
			<Card subTitle="Expense/Income List">
				<div style={{ display: "flex", flexDirection: "column" }}>
					{/* <ExpenseItem expense={expenses[0]} />
					<ExpenseItem expense={expenses[1]} /> */}
				</div>
			</Card>
		</div>
	);
};
