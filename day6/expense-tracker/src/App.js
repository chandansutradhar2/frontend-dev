import logo from "./logo.svg";
import "./App.css";
import {
	Investment,
	INVESTMENT_CATEGORY,
	INVESTMENT_FREQUENCY,
	INVESTMENT_TYPE,
} from "./models/Investment.model";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Manager } from "./components/Manager/ExpenseManager";
import { ExpenseList } from "./components/Expenses/ExpenseList";

function App() {
	let products = [
		{
			code: "c001",
			name: "Demo product",
			category: "Some Category",
			quantity: 10,
		},
	];
	return (
		<div className="container">
			<Manager />
			<ExpenseList />
		</div>
	);
}

export default App;
