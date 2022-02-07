import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	let navigate = useNavigate();

	const navigateHandler = (url) => {
		navigate(url, {
			replace: false,
		});
	};

	return (
		<>
			<Navbar bg="dark" variant="dark" fixed="top">
				<Navbar.Brand onClick={() => navigateHandler("/")}>
					FinanceGuru
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link onClick={() => navigateHandler("/expense")}>
						Expense Tracker
					</Nav.Link>

					<Nav.Link onClick={() => navigateHandler("/investment")}>
						Investment Tracker
					</Nav.Link>

					<Nav.Link onClick={() => navigateHandler("/finance")}>
						Finance Planning
					</Nav.Link>

					<Nav.Link onClick={() => navigateHandler("/profile")}>
						Profile
					</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
};
