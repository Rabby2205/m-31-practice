const numbers = [5, 13, 7, 79, 27, 53, 43, 30, 5, 67, 4, 3];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(bigNumbers, smallNumbers);
const products = [
    { name: 'bottle', price: 50, color: 'red' },
    { name: 'Phone', price: 5000, color: 'black' },
    { name: 'pen', price: 5, color: 'red' },
    { name: 'wathch', price: 290, color: 'blue' },
    { name: 'sun glass', price: 150, color: 'lime' },
]
const budget = products.filter(product => product.price < 100);
// console.log(budget);
const included = products.filter(product => product.color == 'red');
// console.log(included);
const search = products.find(product => product.price, 300);
console.log(search);