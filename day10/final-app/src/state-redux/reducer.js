import ACTIONS from "./action";

const defaultState = {
	isLoggedIn: false,
	users: {},
	expenses: [],
};

const appReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ACTIONS.Types.LOGIN_USER:
			console.log(action);
			debugger;
			let newStateObj = { ...state, isLoggedIn: action.payload };
			console.log(newStateObj);
			return newStateObj;
		case ACTIONS.Types.LOGOUT_USER:
			console.log(action);
			return { ...state, isLoggedIn: action.payload };
		default:
			return state;
	}
};

export default appReducer;
