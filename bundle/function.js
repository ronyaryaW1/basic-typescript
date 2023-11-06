"use strict";
// function => return string
const funtionString = () => {
    return "string";
};
// function => return number
const funtionNumber = () => 10;
// function void
function functionVoid() {
    let a = 1;
    let b = 2;
    let z = a + b;
    console.log("void does not return " + z);
}
// function with param
const add = (x, y) => {
    return x + y;
};
const addString = (x, y) => {
    return `${x}+${y}=${x + y} `;
};
const addVoid = (x, y) => {
    console.log("result is", x + y);
};
addVoid(9, 20);
console.log(add(10, 9));
console.log(addString(10, 9));
functionVoid();
console.log(funtionString());
console.log(funtionNumber());
