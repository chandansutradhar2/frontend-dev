import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
export const Header = () => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Navbar bg="dark" variant="dark" fixed="top">
				<Navbar.Brand href="#home">FinanceGuru</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Expense Tracker</Nav.Link>
					<Nav.Link href="#features">Investment Tracker</Nav.Link>
					<Nav.Link href="#pricing">Finance Planning</Nav.Link>
				</Nav>
			</Navbar>
		</>
	);
};
