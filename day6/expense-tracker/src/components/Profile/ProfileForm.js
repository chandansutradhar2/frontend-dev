//es6 and above way of defining functional component
//import { InputText } from "primereact/inputtext";

import { useState } from "react";

export const ProfileForm = () => {
	//const [name of the state,setter for the state]=useState('initial value for the state);
	const [fullName, setFullName] = useState("chandan");
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [mobileNo, setMobileNo] = useState();
	const [dob, setDob] = useState("dd/mm/yyyy");

	const fullNameHandler = (ev) => {
		console.log(ev.target.value);
		setFullName(ev.target.value);
	};

	const emailHandler = (ev) => {
		console.log(ev.target.value);
		setEmail(ev.target.value);
	};
	return (
		<div>
			<div>
				Full Name {fullName}, Email:{email}
			</div>
			<h1>Profile Form</h1>
			<form style={{ display: "flex", flexDirection: "column" }}>
				<input
					type="text"
					placeholder="Full Name"
					value={fullName}
					onChange={fullNameHandler}
				/>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={emailHandler}
				/>
				<input
					type="text"
					placeholder="Password"
					value={password}
					onChange={(ev) => setPassword(ev.target.value)}
				/>
				<input
					type="text"
					placeholder="mobileNo"
					value={mobileNo}
					onChange={(ev) => setMobileNo(ev.target.value)}
				/>
				<input
					type="text"
					placeholder="Enter Date of Birth"
					value={dob}
					onChange={(ev) => setDob(ev.target.value)}
				/>
			</form>
			<button>Create Account</button>
			Your email {email}
		</div>
	);
};

//old way of defining functional component
// function ProfileForm(props) {
// 	return {};
// }
