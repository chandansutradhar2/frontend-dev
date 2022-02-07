import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Home = () => {
	return (
		<>
			<p>Home Component</p>

			<Outlet />
		</>
	);
};
