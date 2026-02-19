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
//# sourceMappingURL=index.js.map