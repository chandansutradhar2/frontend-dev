function fun1() {
	return new Promise((resolve, reject) => {
		console.log("fun 1 invoked");
		resolve("fun1");
	});
}

function fun2() {
	return new Promise((resolve, reject) => {
		console.log("fun 2 invoked");
		resolve("fun2");
	});
}

function fun3() {
	return new Promise((resolve, reject) => {
		console.log("fun 3 invoked");
		resolve("fun3");
	});
}

function fun4() {
	return new Promise((resolve, reject) => {
		console.log("fun 4 invoked");
		resolve("fun4");
	});
}

function fun5() {
	return new Promise((resolve, reject) => {
		console.log("fun 5 invoked");
		resolve("fun5");
	});
}

function callerFun() {
	fun1().then(() =>
		fun2().then(() => fun3().then(() => fun4().then(() => fun5().then()))),
	);
}

callerFun();
