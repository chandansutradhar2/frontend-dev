import { useState } from "react";

import "./App.css";
import "./variables.scss";

import ToDo from "./Todo";

function App() {
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
		<div className="App">
			<input
				type="text"
				placeholder="Enter new Todo"
				onChange={(ev) => setTodo(ev.target.value)}
				value={todo}
			/>
			<button onClick={add}>Update Todo</button>
			<ToDo todos={todos} />

			<div>
				<span>
					<h4>{counter}</h4>
				</span>

				<button onClick={increment}>Add</button>
			</div>
		</div>
	);
}

export default App;
