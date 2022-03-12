//declare variable bsaed on the name of an object property ;
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
const sum = x + b;
// console.log(sum);
const [p, q, c] = [45, 37, 91, 86];
// console.log(p, q, c);

const [best, faltu] = [454, 334];
// console.log(best, faltu);

const { sky, color, money } = { sky: 'blue', soil: 'mati', color: 'red', money: 50 };
// console.log(sky, color, money)
const company = {
    name: 'gucci',
    id: 23232,
    ceo: {
        name: 'rabby',
        id: 1,
        food: 'weed',
    },
    web: {
        work: 'web engineer',
        section: 'debuging',
        shift: 'Morning',
        module: {
            section1: 'front-End',
            section2: 'Back-End',
            section3: 'data-analist',
        }
    }
}
console.log(company.ceo?.name1);

