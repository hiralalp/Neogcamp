class BankAccount{

    constructor(name,accountNo,accountBalance,accountType,ifsc){
        this.name = name;
        this.accountNo = accountNo;
        this.accountBalance = accountBalance;
        this.accountType = accountType;
        this.ifsc = ifsc;

    }

    getAccountBalance() {
        return this.accountBalance;
    }

}

let customer1=new BankAccount("Rohan",100,2000,1000,1000);
let customer2=new BankAccount("Divyanshu",100,200,1000,100);
let customer3=new BankAccount("Hiralal",100,200,1000,100);
console.log(`${customer1.name} has ${customer1.getAccountBalance()} balance in account` );
console.log(`${customer2.name} has ${customer2.getAccountBalance()} balance in account` );
console.log(`${customer3.name} has ${customer3.getAccountBalance()} balance in account` );
let avgBalance =(customer1.getAccountBalance()+customer2.getAccountBalance()+customer3.getAccountBalance()/3)
console.log(`Average account balance from all : ${+(Math.round(avgBalance + "e+2")  + "e-2")}`)