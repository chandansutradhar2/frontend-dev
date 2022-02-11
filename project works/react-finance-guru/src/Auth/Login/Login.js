import { useState } from "react";
import axios from "axios";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		//TO DO : LOGIN behaviour
		axios
			.post("http://localhost:4000/user/authenticate", {
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.status == 200) {
					alert(res.data.token);
				} else {
					alert("invalid credentials");
				}
			})
			.catch((err) => alert("invalid credentials"));
	};

	return (
		<div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
			<form style={{ width: "50%", paddingTop: "10%" }}>
				<div className="mb-3">
					<label className="form-label">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
						value={email}
						onChange={(ev) => setEmail(ev.target.value)}
					/>
					{email.length <= 0 ? (
						<div style={{ color: "red", fontSize: "small" }}>
							Email Cannot be left blank
						</div>
					) : null}
				</div>

				<div className="mb-3">
					<label className="form-label">Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleFormControlInput1"
						value={password}
						onChange={(ev) => setPassword(ev.target.value)}
					/>
					{password.length <= 0 ? (
						<div style={{ color: "red", fontSize: "small" }}>
							Password Cannot be left blank
						</div>
					) : null}
				</div>
				<div className="mb-3">
					<button
						type="button"
						className="btn btn-primary"
						onClick={handleLogin}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};
