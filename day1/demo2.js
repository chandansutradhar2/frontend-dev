var customerName = "chandan";

function doRegister() {
	console.log("do register function invoked");
}

function validateEmail() {}

function validatePassword() {}

class Customer {
	//note, in case of attributes/variable defined within the class,
	//use class context to define the attribute name
	name = "chandan ";

	doRegister() {
		console.log("do register Method invoked");
	}
}

doRegister();
var custObj = new Customer();

custObj.name;

//note: methods are invoked via class object
custObj.doRegister();

//note: function invocation
doRegister();
