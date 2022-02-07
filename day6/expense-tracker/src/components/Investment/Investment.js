import { Link, Outlet } from "react-router-dom";

export const InvestmentView = () => {
	return (
		<div className="container">
			<Link to="mf">Mutual Funds</Link>
			<Link to="els">Equity Linked Savings</Link>
			<Link to="nps">National Pension Funds</Link>
			<h3>Investement View</h3>
			<Outlet />
		</div>
	);
};

export function MutualFund() {
	return (
		<div className="container">
			<h3>List of Mutual Funds</h3>
		</div>
	);
}

export function ELS() {
	return (
		<div className="container">
			<h3>List of Investments / ELSS</h3>
		</div>
	);
}

export function NPS() {
	return (
		<div className="container">
			<h3>List of National Pension Funds</h3>
		</div>
	);
}
