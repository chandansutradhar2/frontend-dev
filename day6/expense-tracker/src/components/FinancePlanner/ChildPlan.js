import React from "react";

export class ChildPlan extends React.Component {
	constructor() {
		super();
		console.log("child class constructor loaded");
	}

	componentDidMount() {
		console.log("ChildPlan did mount");
	}

	componentDidUpdate() {
		console.log("ChildPlan Did Update invoked");
	}

	componentWillUnmount() {
		console.log("ChildPlan Will UNmount invoked");
	}

	componentDidCatch() {
		console.log("ChildPlan DidCatch invoked");
	}

	componentWillUnmount() {
		console.log("ChildPlan WillUnmount invoked");
	}

	shouldComponentUpdate() {
		console.log("ChildPlan component shouldupdate invoked");
	}

	render() {
		return <h5>Child Plan View</h5>;
	}
}
