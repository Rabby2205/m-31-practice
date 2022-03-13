//creating a class . 
class Member {
    name;
    roll = 'web eng-03';
    constructor(name, roll) {//this section is to take dynamic property .
        this.name = name;
        this.roll = roll;
    }
    startSession() {//this is doing something by funciton .
        console.log(this.name, 'start a seasson');

    }
    designation = 'web Engineer';
}
const kamal = new Member('kamal', 'web eng-2');
const Rabby = new Member('Rabby Islam', 'web Eng-1');
console.log(kamal);
console.log(Rabby);
Rabby.startSession();
kamal.startSession();