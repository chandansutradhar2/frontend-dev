import logo from "./logo.svg";
import "./App.css";
import Title from "./Header";
import * as demo from "./Header";
import { FirstName } from "./Header";
import { SideBar } from "./Sidebar";

function App() {
	return (
		<div className="container">
			<Title />
			<SideBar />
		</div>
	);
}

export default App;
