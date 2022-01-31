import { Observable } from "rxjs";

function fethStockInfoObservable() {
	return new Observable((obs) => {
		setInterval(() => {
			//assume logic is to fetch score from server
			let stockPrice = Math.floor(Math.random() * 9);
			//console.log(stockPrice);
			obs.next(stockPrice);
		}, 2000);
	});
}

function fetchStockInfoPromise() {
	return new Promise((resolve, reject) => {
		setInterval(() => {
			//assume logic is to fetch score from server
			let stockPrice = Math.floor(Math.random() * 9);
			//console.log(stockPrice);
			resolve(stockPrice);
		}, 2000);
	});
}

fetchStockInfoPromise().then((r) => {
	console.log("stock price is ", r);
});

fethStockInfoObservable().subscribe((r) => {
	console.log("stock price is ", r);
});
