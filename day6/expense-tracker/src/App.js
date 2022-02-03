import logo from "./logo.svg";
import "./App.css";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import {
	Investment,
	INVESTMENT_CATEGORY,
	INVESTMENT_FREQUENCY,
	INVESTMENT_TYPE,
} from "./models/Investment.model";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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
			<div className="card">
				<Fieldset legend="Add Income/Expenses" toggleable>
					<p></p>
					<Button label="Add Expense" className="p-button-danger" />
				</Fieldset>
			</div>
			<hr />
			<div className="card">
				<DataTable value={products}>
					<Column field="code" header="Code"></Column>
					<Column field="name" header="Name"></Column>
					<Column field="category" header="Category"></Column>
					<Column field="quantity" header="Quantity"></Column>
				</DataTable>
			</div>
		</div>
	);
}

export default App;
