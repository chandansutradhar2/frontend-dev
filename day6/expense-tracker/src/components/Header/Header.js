import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

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
				<Navbar.Brand href="#home">FinanceGuru</Navbar.Brand>
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
