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
