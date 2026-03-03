let numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(numbers);
let strings: Array<string> = ["Dinesh", "Nalliboina"];
console.log(strings);

let user: { name: string; age: number }[] = [];
user.push({ name: "Dinesh", age: 20 });
console.log(user);

let BIO: Array<{
  name: string;
  age: number;
  address: { street: string; city: string };
}> = [];

BIO.push({
  name: "Dinesh",
  age: 20,
  address: {
    street: "NanakramGuda",
    city: "Hyderabad",
  },
});

console.log(BIO);

// functions

function addition(a: number, b: number): number {
  return a + b;
}

console.log(addition(1, 2));

//arrow function

const arrow = (a: number, b: number): number => {
  return a - b;
};
console.log(arrow(1, 2));

//returnijng the object in the function

const userInfo = (
  name: string,
  city: string
): { name: string; city: string } => {
  return { name, city };
};

console.log(userInfo("dinesh", "Hyderabad"));


// classes and access modifiers

class Bank {
  accountNumber: number;  
  ownerName: string;
  private _balance: number;
  constructor(accountNumber: number, ownerName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this._balance = balance;
  }
  get balance(): number {
    return this._balance;
  }
  set balance(amount: number) {
    if (amount < 0) {
      console.log("Balance cannot be negative");
    } else {
      this._balance = amount;
    }   
  }
}

const myAccount = new Bank(123456, "Dinesh", 1000);
console.log(myAccount.balance);


//interface object 

interface Niat{
  name: string;
  NiatID: number;
  section: string;
}

const niat1: Niat = {
  name: "Dinesh",
  NiatID: 123,
  section: "A"
};
console.log(niat1);

// interface function

interface ageDoubler {
  age: number;
  name:string;
}
interface ReturnType {
  doubleAge: number;
}

function doubleAge({age,name}: ageDoubler): ReturnType {
  return { doubleAge: age * 2 };
}

console.log(doubleAge({age: 20, name: "Dinesh"}));

interface addition {
  (a: number, b: number): number;
}
const add: addition = (a, b) => a + b;
console.log(add(1, 2));

// interface in arrray

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Dinesh", age: 20 },
  { name: "Nalliboina", age: 25 },
];
console.log(users);

interface stringArray {

  [index: number]: string;
}
const myStringArray: stringArray = ["Dinesh", "Nalliboina"];


//Inline object array interface

interface UserProfile {
  users:{
    name: string;
    age: number;
    email?: string; // optional property  
  }[];
}

const userProfile: UserProfile = {
  users: [
    { name: "Dinesh", age: 20, email: "dinesh@example.com" },
    { name: "Nalliboina", age: 25 },
  ],
};
console.log(userProfile.users[0]);


// interface with class


interface BankAccount {
  accountNumber: number;
  ownerName: string;
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}

class SavingsAccount implements BankAccount {
  accountNumber: number;
  ownerName: string
  balance: number;
  constructor(accountNumber: number, ownerName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
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