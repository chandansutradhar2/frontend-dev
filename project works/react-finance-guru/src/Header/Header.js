import { Link } from "react-router-dom";
import "./Header.css";
export const Header = (props) => {
	console.log(props.isLoggedIn);

	const handleLogout = () => {
		props.handleLogout();
	};

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
			<li>
				{props.isLoggedIn ? (
					<a href="" onClick={handleLogout}>
						Logout
					</a>
				) : (
					<Link to="/login">Login</Link>
				)}
			</li>
		</ul>
	);
};
