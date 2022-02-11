import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export const Login = (props) => {
	let navigate = useNavigate();

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
				if (res.status === 200) {
					localStorage.setItem("token", res.data.token);
					localStorage.setItem("user", JSON.stringify(res.data.user));
					props.loginHandler();
					navigate("/");
				} else {
					alert("invalid credentials");
				}
			})
			.catch((err) => alert("invalid credentials"));
	};

	return (
		<div style={{ width: "100vw", display: "flex", justifyContent: "center" }}>
			<form style={{ width: "50%", paddingTop: "10%" }}>
				<div className="field col-8">
					<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-user"></i>
						</span>
						<span className="p-float-label">
							<InputText
								id="inputgroup"
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<label htmlFor="inputgroup">Email</label>
						</span>
					</div>
				</div>
				{/* <div className="mb-3">
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
				</div> */}

				{/* <div className="mb-3">
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
				</div> */}
				<div className="field col-8">
					<div className="p-inputgroup">
						<span className="p-inputgroup-addon">
							<i className="pi pi-user"></i>
						</span>
						<span className="p-float-label">
							<Password
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								toggleMask
							/>
							<label htmlFor="inputgroup">Password</label>
						</span>
					</div>
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
				<div className="mb-3">
					<button
						type="button"
						className="btn btn-link"
						onClick={() => navigate("/register")}
					>
						New user? SignUp
					</button>
				</div>
			</form>
		</div>
	);
};
