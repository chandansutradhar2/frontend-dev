import * as React from "react";
export class Welcome extends React.Component {
	constructor() {
		super();
		//this.props.userName = "ABC";
		console.log(this.props);
	}
	render() {
		return (
			<h1>
				Welcome, {this.props.user.name}, Your age is {this.props.user.age}{" "}
			</h1>
		);
	}
}
