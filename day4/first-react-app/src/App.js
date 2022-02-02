import logo from "./logo.svg";
import "./App.css";
import Title from "./Header";
import { SideBar } from "./Sidebar";
import { Login } from "./Login";

function App() {
	return (
		<div className="container">
			{/* <Title />
			<SideBar /> */}
			<Login />
		</div>
	);
}

export default App;
