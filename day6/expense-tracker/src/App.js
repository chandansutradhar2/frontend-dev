import logo from "./logo.svg";
import "./App.css";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";

function App() {
	return (
		<div className="container">
			<h5>Toggleable</h5>
			<Fieldset legend="Header" toggleable>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<Button label="Add Expense" className="p-button-danger" />
			</Fieldset>
			<div className="card">
				<div className="card-container blue-container flex align-items-center justify-content-start">
					<div className="hidden w-4rem h-4rem bg-blue-500 text-white font-bold p-4 border-round mr-3">
						1
					</div>
					<div className="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round mr-3">
						2
					</div>
					<div className="w-4rem h-4rem bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-4 border-round">
						3
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
