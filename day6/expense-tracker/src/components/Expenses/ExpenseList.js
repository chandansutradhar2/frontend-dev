import { ExpenseItem } from "./ExpenseItem";
import { Card } from "primereact/card";

export const ExpenseList = () => {
	return (
		<div style={{ marginTop: "2rem" }}>
			<Card subTitle="Expense/Income List">
				<ExpenseItem />
				<ExpenseItem />
				<ExpenseItem />
			</Card>
		</div>
	);
};
