import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

export const Home = (props) => {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);

	return (
		<>
			<h4>Home Component</h4>
			<div>
				{props.isLoggedIn ? (
					<h5 style={{ color: "green" }}>user is logged in...</h5>
				) : (
					<h5 style={{ color: "red" }}>user is not logged in...</h5>
				)}
			</div>
		</>
	);
};

export default connect()(Home);
