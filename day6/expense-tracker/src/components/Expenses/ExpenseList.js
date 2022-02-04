import { ExpenseItem } from "./ExpenseItem";
import { Card } from "primereact/card";

export const ExpenseList = (props) => {
	console.log("ExpenseList rendered with props", props);

	return (
		<div style={{ marginTop: "2rem" }}>
			<Card subTitle={props.title}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{props.expenses.map((expItem, idx) => {
						return <ExpenseItem key={idx} expense={expItem} />;
					})}
				</div>
			</Card>
		</div>
	);
};
