import * as React from "react";
export class Welcome extends React.Component {
	timing = "morning";
	constructor() {
		super();
		//this.props.userName = "ABC";
		console.log(this.props);
	}
	render() {
		if (this.timing == "morning") {
			return <h1>Good Morning, {this.props.userName}</h1>;
		} else {
			return <h1>Good Evening, {this.props.userName}</h1>;
		}
	}
}
