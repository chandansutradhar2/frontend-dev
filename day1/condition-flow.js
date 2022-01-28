function ifDemo(deviceType) {
	//comparer operators
	//type comparer operators
	let d = new Date();
	console.log("timer start", d.getMilliseconds());
	if (deviceType == "mobile") {
		console.log("device type is mobile");
	} else if (deviceType == "laptop") {
		console.log("device Type is laptop");
	} else {
		console.log("unable to determine the device type");
	}
	console.log("timer ends", d.getMilliseconds());
}

function switchCaseDemo(deviceType) {
	switch (deviceType) {
		case "mobile":
			console.log("rendering in mobile phone");
			break;
		case "laptop":
			console.log("rendering in landscape mode");
		default:
			console.log("no mode determined..");
			break;
	}
}

//switchCaseDemo("mobile");

ifDemo("laptop");

class Car {
	name;
	maxPax;

	start() {
		console.log(this.name + " started");
	}

	stop() {}
}

var tiago = new Car(); //object instantiation //object intilization //100-110
tiago.name = "tata vxi"; //101=tata vxi
tiago.start();
