import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Navbar bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="#home">FinanceGuru</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link>
						<Link to="/expense">Expense Tracker</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/investment">Investment Tracker</Link>
					</Nav.Link>
					<Nav.Link>Finance Planning</Nav.Link>
					<Nav.Link>
						<Link to="/profile">Profile</Link>
					</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
};
