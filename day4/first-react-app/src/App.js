import logo from "./logo.svg";
import "./App.css";
import Title from "./Header";
//import { SideBar } from "./Sidebar";
import { Login } from "./Login";
import { Product } from "./Product";
import { Welcome } from "./Title";
function App() {
	let userName = "Chandan Naresh";
	let products = [
		{ name: "samasung galaxy X", price: 30000, qty: 0 },
		{ name: "samasung galaxy Y", price: 56000, qty: 25 },
		{ name: "IPhoneX", price: 75000, qty: 22 },
	];

	return (
		<div>
			<Welcome userName={userName} />
			{products.map((product) => {
				return <Product product={product} />;
			})}
		</div>
	);
}

export default App;
