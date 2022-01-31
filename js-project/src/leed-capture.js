import { Customer, IncomeInfo } from "./models/customer.model";
const incomeInfo = new IncomeInfo("salary", 20000);

Customer.setId();
const customer = new Customer(
	"chandan",
	"naresh",
	"abc@gmail.com",
	"828282383",
	"",
	false,
	true,
	"credit",
	incomeInfo,
	null,
);

function saveAll() {
	//localStorage.setItem("cookies", "some data");

	console.log(customer);
}

function savePersonalInfo() {
	customer.getAccountNo();
}

function saveEarningInfo() {}

function saveExpInfo() {}

function toogleIncomeSource() {}

function renderSalariedView() {}

function renderNonSalariedView() {}

function filterState() {}

function validateEmail() {}

saveAll();
