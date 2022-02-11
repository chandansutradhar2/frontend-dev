import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { UserContext } from "../../App";
import { apiUrl } from "../../app.config";

export const ExpenseList = (props) => {
	const user = useContext(UserContext);
	const [filter, setFilter] = useState();
	const [expenses, setExpenses] = useState();

	console.log(props.expense);
	useEffect(() => {
		if (user) {
			axios.get(apiUrl + `expense/get?_id=${user._id}`).then((res) => {
				console.log(res.data);
				setExpenses(res.data);
			});
		}
	}, [props.expense]);

	if (expenses && expenses.length > 0) {
		return (
			<div>
				<h4>Expenses List</h4>
				<DataTable value={expenses} responsiveLayout="scroll">
					<Column field="expDate" header="Incurred On"></Column>
					<Column field="title" header="Expense"></Column>
					<Column field="amount" header="Amount"></Column>
					<Column field="category" header="Category"></Column>
					<Column field="isRecurring" header="Recurring"></Column>
					<Column field="recurringOn" header="Recurring Type"></Column>
				</DataTable>
			</div>
		);
	} else {
		return (
			<div>
				<h4>No Expenses Added. please add an expenses</h4>
			</div>
		);
	}
};
