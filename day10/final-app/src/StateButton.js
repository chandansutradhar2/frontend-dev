import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import ACTIONS from "./state-redux/action";

export const StateButton = () => {
	const dispatch = useDispatch();

	return (
		<button
			type="button"
			className="btn btn-danger"
			onClick={() => dispatch(ACTIONS.logoutUser(false))}
		>
			Logout
		</button>
	);
};

export default connect()(StateButton);
