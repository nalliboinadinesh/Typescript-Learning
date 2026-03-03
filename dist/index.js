"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
let strings = ["Dinesh", "Nalliboina"];
console.log(strings);
let user = [];
user.push({ name: "Dinesh", age: 20 });
console.log(user);
let BIO = [];
BIO.push({
    name: "Dinesh",
    age: 20,
    address: {
        street: "NanakramGuda",
        city: "Hyderabad",
    },
});
console.log(BIO);
function addition(a, b) {
    return a + b;
}
console.log(addition(1, 2));
const arrow = (a, b) => {
    return a - b;
};
console.log(arrow(1, 2));
const userInfo = (name, city) => {
    return { name, city };
};
console.log(userInfo("dinesh", "Hyderabad"));
class Bank {
    accountNumber;
    ownerName;
    _balance;
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative");
        }
        else {
            this._balance = amount;
        }
    }
}
const myAccount = new Bank(123456, "Dinesh", 1000);
console.log(myAccount.balance);
const niat1 = {
    name: "Dinesh",
    NiatID: 123,
    section: "A"
};
console.log(niat1);
function doubleAge({ age, name }) {
    return { doubleAge: age * 2 };
}
console.log(doubleAge({ age: 20, name: "Dinesh" }));
const add = (a, b) => a + b;
console.log(add(1, 2));
const users = [
    { name: "Dinesh", age: 20 },
    { name: "Nalliboina", age: 25 },
];
console.log(users);
const myStringArray = ["Dinesh", "Nalliboina"];
const userProfile = {
    users: [
        { name: "Dinesh", age: 20, email: "dinesh@example.com" },
        { name: "Nalliboina", age: 25 },
    ],
};
console.log(userProfile.users[0]);
class SavingsAccount {
    accountNumber;
    ownerName;
    balance;
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount;
        }
    }
}
const mySavingsAccount = new SavingsAccount(123456, "Dinesh", 1000);
mySavingsAccount.deposit(500);
console.log(mySavingsAccount.balance);
mySavingsAccount.withdraw(200);
console.log(mySavingsAccount.balance);
class Pair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.key = key;
        this.value = value;
    }
}
const stringPair = new Pair("name", "Dinesh");
console.log(stringPair.key, stringPair.value);
const numberPair = new Pair("age", 20);
console.log(numberPair.key, numberPair.value);
function swap(a, b) {
    return [b, a];
}
console.log(swap("Dinesh", 20));
//# sourceMappingURL=index.js.map