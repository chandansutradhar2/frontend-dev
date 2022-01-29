//object declaration / intialization

const fullName = "Chandan";
//fullName = "Chandan Naresh";

//object are derived type / not primtive type
const customerObj = {
	fullName: "chandan naresh",
	mobileNo: "8080811145",
	email: "chandan@gmail.com",
	addresses: [
		{
			type: "office",
			line1: "",
			line2: "",
			city: "",
			state: "",
			zipCode: "",
		},
		{
			type: "home",
			line1: "",
			line2: "",
			city: "",
			state: "",
			zipCode: "",
		},
	],
	getCustomer() {
		return "My name is " + this.fullName;
	},
	setCustomer: () => {
		return "set customer invoked";
	},
};

//some code to send it to server
let stringifyCustomer = JSON.stringify(customerObj);
console.log(stringifyCustomer);

//somehow get the user
let recievedCustomerObj = JSON.parse(stringifyCustomer);
console.log(recievedCustomerObj.fullName);

// Object.assign to clone one object over other
// const testObj = {};
// const tmp = Object.assign(testObj, customerObj);

console.log("object with arrya of objects", customerObj);
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

let customers = [
	{
		name: "chandan",
		age: 38,
		isAdmin: false,
	},
	{
		name: "ranjan",
		age: 32,
		isAdmin: false,
	},
	{
		name: "samaya",
		age: 5,
		isAdmin: true,
	},
];

customers.map((ele) => {
	console.log("map fucntion of objects iterable", ele);
});

console.log(
	customerObj.map((ele) => {
		console.log(ele);
	}),
);
