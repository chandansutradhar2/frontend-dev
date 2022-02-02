import react from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
//import { BSComponent } from "./BootstrapCom";
export const FirstName = "chandan";

function Title() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container style={{ height: "25%" }}>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="./login">Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<section id="action" name="action">
				<div id="3.1">3.1</div>
				<div id="3.2">3.1</div>
				<div id="3.3">3.1</div>
				<div id="3.4">3.1</div>
			</section>
		</div>
	);
}

//to explicitely communicate intent to share Header function
export default Title;
