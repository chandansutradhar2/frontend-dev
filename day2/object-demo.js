//object declaration / intialization

const fullName = "Chandan";
//fullName = "Chandan Naresh";

//object are derived type / not primtive type
const customerObj = {
	fullName: "chandan naresh",
	mobileNo: "8080811145",
	email: "chandan@gmail.com",
	address: "Flat 101, Mira road, thane",
	getCustomer() {
		return "My name is " + this.fullName;
	},
	setCustomer: () => {
		return "set customer invoked";
	},
};

// Object.assign to clone one object over other
// const testObj = {};
// const tmp = Object.assign(testObj, customerObj);

console.log(customerObj["fullName"]); //accessing an object - NOT RECOMMENDED. use . notation to access object properties

const newCustomers = new Array(customerObj);

//modify attribute of object
customerObj.email = "chandansutradhar2@gmail.com";
customerObj.dob = "06/03/1983";
console.log(customerObj.getCustomer());
console.log(customerObj.setCustomer());
//creating object using class..pure OOPS
// class Customer {
// 	name;
// 	mobileNo;
// 	email;
// 	address;
// }

// const newCustomerObj = new Customer();
// console.log(newCustomerObj);
