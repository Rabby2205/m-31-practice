
// to write multiline at code as easy use back-tick . this is new things at es-6 .
//string interpolation or dynamic string ;

const count = 5;
const old = ` <h3 class="friend-name">friend-4</h3>`;
const old2 = '<h3 class="friend-name">friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">friend-${+count}</h3>`;
console.log(new1);
console.log(new1);
console.log(new1);
console.log(new1);
console.log(new1);
