import { useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import "./variables.scss";

import { Login } from "./Login";
import ToDo from "./Todo";
import { Home } from "./Home";
import configureStore from "./state-redux/store";

const store = configureStore();
function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [counter, setCounter] = useState(0);
	const [todo, setTodo] = useState();
	const [todos, setTodos] = useState([
		"Pay Home Loan 1st ",
		"Pay Car Loan on 6th",
		"raise invoice on 10th",
	]);
	const increment = () => {
		setCounter(() => counter + 1);
	};

	const add = () => {
		let tmp = todos.slice();
		tmp.push(todo);
		setTodos(tmp);
	};
	return (
		<Provider store={store}>
			<Login />
			<Home />
		</Provider>
	);
}

export default App;
