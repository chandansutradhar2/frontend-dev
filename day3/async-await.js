async function fun1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 1 invoked");
			resolve(10);
		}, 2000);
	});
}

async function fun2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 2 invoked");
			resolve(20);
		}, 4000);
	});
}

async function fun3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 3 invoked");
			resolve("fun3");
		}, 1200);
	});
}

async function fun4() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 4 invoked");
			resolve("fun4");
		}, 4800);
	});
}

async function fun5() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun 5 invoked");
			resolve("fun5");
		}, 2300);
	});
}

async function callerFun() {
	// fun1().then(() =>
	// 	fun2().then(() => fun3().then(() => fun4().then(() => fun5().then()))),
	// );

	const res1 = await fun1();
	const res2 = await fun2();
	const res3 = await fun3();
	const res4 = await fun4();
	const res5 = await fun5();

	console.log(res1, res2, res3, res4, res5);
}

callerFun();
