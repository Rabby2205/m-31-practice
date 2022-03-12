function add(num1, num2 = 0) {
    //     //1. if (num2 == undefined) {
    //     //     num2 = 0;
    //     // }

    //     //2. num2 = num2 || 0;


    const total = num1 + num2;
    return total;
}
const result = add(15, 17);
// console.log(result);

function fullNaame(first, last = 'chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const name = fullNaame('rabby');
console.log(name);