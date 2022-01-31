function fetchCustomer() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			//fetch customer from database using http REST API
			console.log("setTimeout completed");
			//resolve({ custName: "chandan", email: "chandan@gmail.com" });
			reject("unauthorized access");
		}, 3000);
	});
}

function callerFun() {
	fetchCustomer()
		.then((res) => {
			renderCustomer(res.custName, res.email);
		})
		.catch((err) => {
			console.log("you need to signin before accessing customer data");
		})
		.finally();
}

function renderCustomer(name, email) {
	console.log(`customer name: ${name} and customer email: ${email}`);
}
callerFun();
