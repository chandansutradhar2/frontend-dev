import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import ACTIONS from "./state-redux/action";
import { StateButton } from "./StateButton";

export const Home = () => {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
	const dispatch = useDispatch();

	return (
		<>
			<h4>Home Component</h4>
			<div>
				{isLoggedIn ? (
					<h5 style={{ color: "green" }}>user is logged in...</h5>
				) : (
					<h5 style={{ color: "red" }}>user is not logged in...</h5>
				)}
			</div>
			<StateButton />
		</>
	);
};

export default connect()(Home);
