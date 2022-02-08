import { Button } from "primereact/button";
import { useState, createContext, useContext } from "react";

import { Outlet } from "react-router-dom";
import { UserContext } from "../../App";
import { Header } from "../Header/Header";

export const Home = () => {
	const changeUser = useContext(UserContext);

	//const [user, setUser] = useState();

	return (
		<div style={{ marginTop: "400px" }}>
			<h1 className="animate__animated animate__fadeInDown">Home Component</h1>
			<h4>Welcome back ,</h4>
			<Button onClick={changeUser} />
		</div>
	);
};
