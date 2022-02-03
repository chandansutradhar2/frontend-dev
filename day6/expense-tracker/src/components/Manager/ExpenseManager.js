import React from "react";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";

export function Manager() {
	return (
		<div className="card">
			<Fieldset legend="Add Income/Expenses" toggleable>
				<p></p>
				<Button label="Add Expense" className="p-button-danger" />
			</Fieldset>
		</div>
	);
}
