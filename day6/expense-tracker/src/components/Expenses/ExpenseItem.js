import "./ExpenseItem.css";
export const ExpenseItem = (props) => {
	console.log(props);
	let date = new Date(props.expense.expDate);
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
				<div>{props.expense.title}</div>
				<div>&#8377; {props.expense.amount}</div>
			</div>
		</div>
	);
};
