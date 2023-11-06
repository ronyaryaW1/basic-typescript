// function => return string
const funtionString = (): string => {
	return "string";
};

// function => return number
const funtionNumber = (): number => 10;

// function void
function functionVoid(): void {
	let a = 1;
	let b = 2;
	let z = a + b;
	console.log("void does not return " + z);
}
// function with param
const add = (x: number, y: number): number => {
	return x + y;
};
const addString = (x: number, y: number): string => {
	return `${x}+${y}=${x+y} `;
};
const addVoid = (x: number, y: number): void => {
	console.log("result is", x + y);
};


addVoid(9, 20);
console.log(add(10, 9));
console.log(addString(10, 9));
functionVoid();
console.log(funtionString());
console.log(funtionNumber());
