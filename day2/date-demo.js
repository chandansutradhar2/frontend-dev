//Date is defined using new keyword
let today = new Date(); //default to current date
let anotherDay = new Date(today.setDate(10));
//console.log(anotherDay.toUTCString());

let tomorrow = new Date(2022, 03, 06, 05, 30, 00, 00);
console.log(tomorrow);
//USE MOMENT.JS for date manipulation
