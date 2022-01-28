//example of var scope and let keyword, and cost

for (let index = 0; index < 10; index++) {
	//var has default global scope
	let n = index;
	//console.log(n);
}

// if (n !== undefined || n !== null) {
// 	console.log("user logged in");
// } else {
// 	//should be default flow
// 	console.log("user not logged in");
// }

//console.log(n);

// const age = 30;
// console.log(age);
// age++;
// console.log(age);

function demo() {
	const test = "test";
}

console.log(test);
