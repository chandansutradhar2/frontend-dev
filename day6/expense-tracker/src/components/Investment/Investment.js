import { Link, Outlet } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import axios from "axios";

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
	const cardStyle = {
		marginRight: "10px",
	};

	if (true) {
		cardStyle.marginRight = "20px";
	}

	const [mutualfunds, setMutualFunds] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/investment/mutualfunds")
			.then((res) => {
				if (res.data) {
					let mfs = [];
					res.data.forEach((element) => {
						console.log();
						mfs.push(element);
					});

					setMutualFunds(mfs);
				} else {
					alert("failed to get mutual funds data");
				}
			})
			.catch((err) => alert(err));
	}, []);
	if (mutualfunds.length > 0) {
		return (
			<div className="container">
				<h3>List of Mutual Funds</h3>
				return (
				<div
					style={{
						margin: "10px",
						display: "flex",
						flexWrap: "wrap",
						width: "75%",
					}}
				>
					{mutualfunds.map((ele, id) => {
						return (
							<Card
								style={cardStyle}
								key={id}
								title={ele.name}
								subTitle="Subtitle"
								style={{ width: "25em" }}
							>
								<p className="m-0" style={{ lineHeight: "1.5" }}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Inventore sed consequuntur error repudiandae numquam deserunt
									quisquam repellat libero asperiores earum nam nobis, culpa
									ratione quam perferendis esse, cupiditate neque quas!
								</p>
								<strong>
									Fund Value : {ele.fundValue}, Established Since{" "}
									{ele.establishedYear}
								</strong>
							</Card>
						);
					})}
				</div>
				);
			</div>
		);
	} else {
		return <h4>No Mutual funds found</h4>;
	}
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
