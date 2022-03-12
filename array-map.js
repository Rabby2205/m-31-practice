//array map is 
const numbers = [4, 3, 6, 7, 10, 45, 2];
const output = [];
//old system or maual system
const doubleIT = (number) => number * 2;

for (number of numbers) {
    const result = doubleIT(number);
    output.push(result);
}
// console.log(output);
//now mapping system

const output2 = numbers.map(doubleIT);
console.log(output2);