//ENUM to avoid spell mistake
const Types = {
	LOGIN_USER: "LOGIN_USER",
	LOGOUT_USER: "LOGOUT_USER",
};

//action list

//login component will trigger LOGIN_USER
const loginUser = (val) => ({
	type: Types.LOGIN_USER,
	payload: val,
});

const logoutUser = (val) => ({
	type: Types.LOGOUT_USER,
	payload: val,
});

export default {
	loginUser,
	logoutUser,
	Types,
};
