let fullName = "chandan"; // string can be initialized with either single quotes or double quotes
let lastName = "naresh";
//console.log(lastName[4]);

//escaping string using ``
let longString = `this is going to be a very long string,This is going to be a very long strig
    This is going to be a very long string
    This is going to be a very long stringT
    his is going to be a very long string
    This is going to be a very long string
    This is going to be a very long string
    This is going to be a very long string
    This is going to be a very long string
    This is going to be a very long string`;
//console.log(longString);

let age = 38;

let printMsg =
	"your name is " +
	fullName +
	" your last name is " +
	lastName +
	" your age is " +
	age;

//string with dynamic expression
let printMsg2 = `your name is ${fullName} and your last name is ${lastName} and your age is ${age}`;
//console.log(printMsg2);

//string slice

let tmp = fullName.slice(1, 4); //slicing string
let replaceVar = fullName.replace(tmp, "abc"); //replacing the data of the string
//console.log(tmp, fullName, replaceVar);
let alphaColl = "chandan:ranjan:samaya";
let substrVar = alphaColl.split(":"); //splitting the string
//console.log(substrVar.length, alphaColl);

//findindex Demo
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

const idx = customers.findIndex((ele) => {
	return ele.age > 30;
});

console.log(idx);

//indexOf demo
let emailId = "chandan@gmail.com";
let index = emailId.indexOf("@");
console.log(index);
