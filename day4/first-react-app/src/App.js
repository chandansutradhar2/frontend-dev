import logo from "./logo.svg";
import "./App.css";
import Title from "./Header";
//import { SideBar } from "./Sidebar";
import { Login } from "./Login";
import { Product } from "./Product";
function App() {
	let products = [
		{ name: "samasung galaxy X", price: 30000, qty: 0 },
		{ name: "samasung galaxy Y", price: 56000, qty: 25 },
		{ name: "samasung galaxy Z", price: 75000, qty: 22 },
	];

	return (
		<div>
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	);
}

export default App;
