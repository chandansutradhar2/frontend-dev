import { memo } from "react";

const ToDo = (props) => {
	console.log("todo rendered", props.todos);

	return (
		<>
			<h2>My Todos</h2>
			{props.todos.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
		</>
	);
};

export default memo(ToDo);
