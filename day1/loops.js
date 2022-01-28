function forLoopDemo() {
	//use for loop as last resort
	for (let index = 0; index < 10; index++) {
		//breaking loop
		if (index == 5) {
			break;
		}
		console.log(index);
	}
}

function forInPlaceOfForEach(names) {
	// let cnt = 0;
	// let arrayLength = names.length;

	// for (cnt = 0; cnt <= arrayLength; cnt++) {
	// 	console.log(names[cnt]);
	// }

	if (names) {
		names.forEach((ele, index) => {
			console.log(ele, index);
			if (index == 2) {
				//you cannot break from foreach loop
				//break;
			}
		});
	} else {
		console.log("pls pass an array");
	}
}

function forEachLoopDemo() {
	let names = ["chandan", "ranjan", "samaya", "harsha"];

	let ages = 20;
	//for each only works on iteratble like stack, queues, arrays and collection
	names.forEach((idx) => {
		//example of arrow function
		console.log("username:", idx);
	});

	names.forEach(function cb(idx) {
		//normal js function
		console.log("username:", idx);
	});
}

function whileLoopDemo() {
	let names = ["chandan", "ranjan", "samaya", "harsha"];
	let length = names.length;
	let cnt = 0;
	while (cnt < length) {
		console.log(names[cnt]);
		//developer responsibility to ensure that iteration ends else its infitiy
		cnt++;
	}
}

//forLoopDemo();
//forEachLoopDemo();
whileLoopDemo();

let names = ["chandan", "ranjan", "samaya", "harsha"];
//forInPlaceOfForEach(names);
