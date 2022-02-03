export class Expense {
	createdOn;
	createdBy;
	category;
	amount;
	transactionType;
}

export class TRANSACTION_TYPE {
	static CREDIT = new TRANSACTION_TYPE("CREDIT");
	static DEBIT = new TRANSACTION_TYPE("DEBIT");

	constructor(name) {
		this.name = name;
	}
}
