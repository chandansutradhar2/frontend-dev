function performLogin() {
	//lesson 3: async function call here... any function which makes the process wait
	// setTimeout(() => {
	// 	console.log("login invoked");
	// }, 10000);
	//sync code
	let n = 0;
	console.log("before foreach loop :", n);
	//for each ..loop are not considered async function
	for (let i = 0; i < 10000000; i++) {
		n++;
	}
	console.log("after for each completion value of n is :", n);
}

//function call / function invocation
login();

//lesson 1: JS is functional programming
//lesson 2: JS is OOPS as well ...to be proven
