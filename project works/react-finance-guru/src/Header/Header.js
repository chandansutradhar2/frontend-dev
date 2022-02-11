import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/expense">Expenses</Link>
			</li>
			<li>
				<Link to="/investment">Investment</Link>
			</li>
			<li>
				<Link to="/finance">Finance Planner</Link>
			</li>
		</ul>
	);
};
