const fish = {
    id: 000001,
    name: 'king fish',
    price: 750 + ' ' + 'tk',
    place: 'salimgonj',
    weight: 1.8 + 'kg',
}
// const price = fish.price;
// const place = fish.place;
// console.log(price, place);
// const stringified = JSON.stringify(fish);
// console.log(stringified);

const { price, place, id } = fish;
console.log(fish);

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
// const section1 = company.web.module.section1;
// console.log(section1);
const { section1, section2, section3 } = company.web.module;//accessing element shortcut .
console.log(section1, section2, section3);

// summury is access object element shortcut .