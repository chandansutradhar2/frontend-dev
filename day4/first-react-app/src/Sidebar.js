import "./Sidebar.css";

let adminStyle = {
	backgroundColor: "red",
	fontSize: "18px",
};

export function SideBar() {
	setTimeout(() => {
		console.log("setTimeout called");
		adminStyle.backgroundColor = "blue";
	}, 4000);
	return (
		<div>
			<ul className="sidebar-nav">
				<li>Home</li>
				<li>Categories</li>
				<li>Products</li>
				<li>Cart</li>
				<li>Profile</li>
				<li>Address</li>
			</ul>

			<ul
				style={{
					height: "100px",
					listStyleType: "none",
					backgroundColor: "white",
				}}
			>
				<li className="signout">Signout</li>
				<li style={adminStyle}>Admin Login</li>
			</ul>
		</div>
	);
}
