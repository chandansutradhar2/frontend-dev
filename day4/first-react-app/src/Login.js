import { Button, Form } from "react-bootstrap";
export function Login() {
	function doLogin() {
		alert("login clicked");
		console.log(email);
	}

	//declare variables
	var email = "chandan@gmail.com";

	return (
		<>
			<h2>Login </h2>
			{/* usage of email in jsx */}
			<h4>{email}</h4>
			<div>
				The Current time is
				{new Date().toISOString()}
			</div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember Met" />
				</Form.Group>
				<Button variant="primary" onClick={() => doLogin()}>
					Login
				</Button>
			</Form>
		</>
	);
}
