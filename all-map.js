const friends = ['Rabby islam', 'Bayazid', 'Sumon Ahmed', 'Rakib Ahmed Hridoy'];
const flengths = friends.map(friend => friend.length);
// console.log(flengths);

const products = [
    { name: 'bottle', price: 50, color: 'red' },
    { name: 'Phone', price: 5000, color: 'black' },
    { name: 'pen', price: 5, color: 'yellow' },
    { name: 'wathch', price: 290, color: 'blue' },
    { name: 'sun glass', price: 150, color: 'lime' },
]
const ProductName = products.map(product => product.name);
const ProductPrice = products.map(product => product.price);
// console.log(JSON.stringify(ProductName, ProductPrice));
console.log(products);
