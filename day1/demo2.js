var fName = "chandan";
var lName = "naresh";
var email = "chandan.sutradhar@gmail.com";
var mobileNo = "8080811145";
var password = "somesecret";
var isAdmin;

function doRegister() {
	console.log("do register function invoked");
}

function validateEmail() {}

function validatePassword() {}

class Customer {
	doRegister() {
		console.log("do register Method invoked");
	}
}

doRegister();
var custObj = new Customer();
//note: methods are invoked via class object
custObj.doRegister();

//note: function invocation
doRegister();
