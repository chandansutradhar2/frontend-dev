import { ExpenseItem } from "./ExpenseItem";
import { Card } from "primereact/card";
import { Expense, TRANSACTION_TYPE } from "../../models/Expense.model";
export const ExpenseList = (props) => {
	console.log(props.expenses);
	return (
		<div style={{ marginTop: "2rem" }}>
			<Card subTitle="Expense/Income List">
				<div style={{ display: "flex", flexDirection: "column" }}></div>
			</Card>
		</div>
	);
};
