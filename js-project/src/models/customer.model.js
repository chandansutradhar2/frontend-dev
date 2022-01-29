export class User {
	firstName;
	lastName;
	mobileNo;
	email;
	address;

	constructor(firstName, lastName, mobileNo, email, address) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.email = email;
		this.address = address;
	}
}

class Employee extends User {
	empCode;
	department;
	roles = [];
	constructor(
		firstName,
		lastName,
		email,
		mobile,
		address,
		empCode,
		department,
		roles,
	) {
		super(firstName, lastName, mobile, email, address);
		this.empCode = empCode;
		this.department = department;
		this.roles = roles;
	}
}

class Prospect extends User {
	createdFrom;
	createdOn;
}

export class Customer extends User {
	static applicationId;
	isExisting;
	accNo;
	isSalaried;
	cardAppliedFor;
	applicationStatus;
	incomeInfo = IncomeInfo;
	expenseInfo = ExpenseInfo;

	constructor(
		firstName,
		lastName,
		email,
		mobile,
		address,
		isExisting,
		isSalaried,
		cardAppliedFor,
		incomeInfo = IncomeInfo,
		expenseInfo = ExpenseInfo,
	) {
		super(firstName, lastName, mobile, email, address);
		this.isExisting = isExisting;
		this.isSalaried = isSalaried;
		this.cardAppliedFor = cardAppliedFor;
		this.incomeInfo = incomeInfo;
		this.expenseInfo = expenseInfo;
	}

	static setId() {}
	getAccountNo() {
		return this.accNo;
	}
}

export class IncomeInfo {
	source;
	amount;
	constructor(source, amount) {
		this.source = source;
		this.amount = amount;
	}

	save() {}
}

class ExpenseInfo {
	name;
	amount;
}

class Address {
	line1;
	line2;
	city;
	state;
	zipCode;
}

const emp = new Employee(
	"Chandan",
	"naresh",
	"chandan@gmail.com",
	"80808111145",
	null,
	"C001",
	"IT",
	"[admin]",
);

cusObj = new Customer(
	"Chandan",
	"naresh",
	"chandan@gmail.com",
	"80808111145",
	null,
	"C001",
	"IT",
	"[admin]",
);
console.log(cusObj);

modules.exports = Customer;
