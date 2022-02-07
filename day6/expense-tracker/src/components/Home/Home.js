import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Home = () => {
	return (
		<div style={{ margin: "75px" }}>
			<p>Home Component</p>

			<Outlet />
		</div>
	);
};
