function forLoopDemo() {
	for (let index = 0; index < 10; index++) {
		console.log(index);
	}
}

function forEachLoopDemo() {
	let names = ["chandan", "ranjan", "samaya", "harsha"];
	names.forEach((ele) => {
		console.log(ele);
	});
}

function whileLoopDemo() {
	let names = ["chandan", "ranjan", "samaya", "harsha"];
	let length = names.length;
	let cnt = 0;
	while (cnt <= length) {
		console.log(names[cnt]);
		cnt++;
	}
}

//forLoopDemo();
//forEachLoopDemo();
whileLoopDemo();
