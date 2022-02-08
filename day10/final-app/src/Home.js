export const Home = (props) => {
	return (
		<>
			<h4>Home Component</h4>
			<h5>
				{props.isLoggedIn ? (
					<h5 style={{ color: "green" }}>user is logged in...</h5>
				) : (
					<h5 style={{ color: "red" }}>user is not logged in...</h5>
				)}
			</h5>
		</>
	);
};
