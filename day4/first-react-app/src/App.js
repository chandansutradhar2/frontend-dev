import logo from "./logo.svg";
import "./App.css";
import Title from "./Header";
//import { SideBar } from "./Sidebar";
import { Login } from "./Login";

function App() {
	var cnt = 0;
	let products = [
		{ name: "samasung galaxy X", price: 30000, qty: 0 },
		{ name: "samasung galaxy Y", price: 56000, qty: 25 },
		{ name: "samasung galaxy Z", price: 75000, qty: 22 },
	];
	return (
		<div>
			<ul>
				{products.map((ele) => {
					return <li>{ele.name}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;
