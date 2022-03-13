// practice 1 {variable declearatin }
const FirstName = 'Rabby';
const LastName = 'Islam';

// practice-2
// console.log(`your name ${FirstName} ${LastName}`);

// practice-3.1 {single parameter arrow function}
const DoubleIt = x => x * 2;
// console.log(DoubleIt(10));

// practice-3.2 {Multi-parameter arrow function}
const task = (x, y) => (x + 2) * (y + 2);
// console.log(task(2, 3));

// practice-3.3 {single line arrow function}
const task2 = (x, y, z) => x * y * z;
// console.log(task2(2, 3, 4));

// practice-3.4 {Multiline arrow function}
const task3 = (x, y) => {
    const X = x + 2;
    const Y = y + 2;
    sum = X * Y;
    return sum;
}
// console.log(task3(2, 3));

// practice-4
/**----- || defarence between js fucntion and arrow function || ------  */

// practice-4.1
/**--------|| Defarance between VAR,LET,CONST ||---------------------- */

// practice-5 {write an array and multiplay all elemet by 5}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array5 = array.map(array => array * 5);
// console.log(array5);

//practice-6{Find odd and even and array numbers from an array }
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayEven = array1.filter(number => number % 2 == 0);
const arrayOdd = array1.filter(number => number % 2 != 0)
// console.log(`Array is ${array1}`);
// console.log(`All even Number from array is ${arrayEven}`);
// console.log(`All Odd Number from array is ${arrayOdd}`);

// practice-7 {in an array has more then one objects find that object which have price 5000 taka}

const array2 = [
    { name: 'apple', price: 120000, color: 'black' },
    { name: 'Xiaomi', price: 20000, color: 'silveer' },
    { name: 'Samsung', price: 12000, color: 'gray' },
    { name: 'Honor', price: 5000, color: 'silverBlue' },
    { name: 'Motorla', price: 10000, color: 'kiBlack' }
]
const search = array2.find(product => product.price == 5000);
// console.log(search);

// pactice-8 {an objects property use as a variable by destructuring}

const student = {
    name: 'Rabby Islam',
    Roll: 700,
    Department: 'Web engineer',
    Section: 'Full-stack',
}
const name = student.name;
// console.log(name);

// practice-9 {make a variable from  array an element by  array destructuring }

const array3 = ['Raaby islam', 'Bayazid alom', 'Sumon ahmed', 'Rakib'];
// const three = array3[2];
// console.log(three);
const [a, b, c, d, e] = [1, 2, 3, 4, 5];
const three = c;
// console.log(three);

// practice-10
const sum = (x = 0, y = 0, z = 7) => x + y + z;
// console.log(sum(0));

