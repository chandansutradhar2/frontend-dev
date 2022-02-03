//es6 and above way of defining functional component
//import { InputText } from "primereact/inputtext";

import { useState } from "react";
import { Customer } from "../../models/Customer.model";

// export const ProfileForm = () => {
// 	//const [name of the state,setter for the state]=useState('initial value for the state);
// 	const [fullName, setFullName] = useState("chandan");
// 	const [email, setEmail] = useState();
// 	const [password, setPassword] = useState();
// 	const [mobileNo, setMobileNo] = useState();
// 	const [dob, setDob] = useState("dd/mm/yyyy");

// 	const fullNameHandler = (ev) => {
// 		console.log(ev.target.value);
// 		setFullName(ev.target.value);
// 	};

// 	const emailHandler = (ev) => {
// 		console.log(ev.target.value);
// 		setEmail(ev.target.value);
// 	};
// 	return (
// 		<div>
// 			<div>
// 				Full Name {fullName}, Email:{email}
// 			</div>
// 			<h1>Profile Form</h1>
// 			<form style={{ display: "flex", flexDirection: "column" }}>
// 				<input
// 					type="text"
// 					placeholder="Full Name"
// 					value={fullName}
// 					onChange={fullNameHandler}
// 				/>
// 				<input
// 					type="text"
// 					placeholder="Email"
// 					value={email}
// 					onChange={emailHandler}
// 				/>
// 				<input
// 					type="text"
// 					placeholder="Password"
// 					value={password}
// 					onChange={(ev) => setPassword(ev.target.value)}
// 				/>
// 				<input
// 					type="text"
// 					placeholder="mobileNo"
// 					value={mobileNo}
// 					onChange={(ev) => setMobileNo(ev.target.value)}
// 				/>
// 				<input
// 					type="text"
// 					placeholder="Enter Date of Birth"
// 					value={dob}
// 					onChange={(ev) => setDob(ev.target.value)}
// 				/>
// 			</form>
// 			<button>Create Account</button>
// 			Your email {email}
// 		</div>
// 	);
// };

export const ProfileForm = () => {
	console.log("loaded...");
	const [profile, setProfile] = useState({
		fullName: "",
		email: "",
		dob: "",
		password: "",
		mobileNo: "",
	});

	const [toggleState, setToggleState] = useState(false);
	const [filedType, setFieldType] = useState("password");
	const changeHandler = (ev) => {
		//console.log(ev.target.value);
		// setProfile((prevState) => ({
		// 	...prevState,
		// 	fullName: ev.target.value,
		// }));
	};

	const toggleHandler = (ev) => {
		//preventDefault();
		ev.preventDefault();
		if (toggleState) {
			setToggleState(false);
			setFieldType("password");
		} else {
			setToggleState(true);
			setFieldType("text");
		}
		console.log(toggleState);
	};

	return (
		<div>
			<div>
				Full Name {profile.fullName}, Email:{profile.email}
			</div>
			<h1>Profile Form</h1>
			<form style={{ display: "flex", flexDirection: "column" }}>
				<input
					id="fullName"
					type="text"
					placeholder="Full Name"
					value={profile.fullName}
					onChange={changeHandler}
				/>
				<input
					id="email"
					type="text"
					placeholder="Email"
					value={profile.email}
					onChange={changeHandler}
				/>
				<input
					id="password"
					type={filedType}
					placeholder="Password"
					onChange={changeHandler}
				/>
				<button onClick={toggleHandler}>Show/Hide</button>
				<input
					id="mobileNo"
					type="text"
					placeholder="mobileNo"
					value={profile.mobileNo}
					onChange={changeHandler}
				/>
				<input
					type="text"
					id="dob"
					placeholder="Enter Date of Birth"
					value={profile.dob}
					onChange={changeHandler}
				/>
			</form>
			<button>Create Account</button>
		</div>
	);
};

//old way of defining functional component
// function ProfileForm(props) {
// 	return {};
// }
