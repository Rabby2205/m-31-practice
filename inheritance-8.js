
class TeamMember {

}




//creating a class . 
class Member {
    name;
    roll;
    constructor(name, roll) {//this section is to take dynamic property .
        this.name = name;
        this.roll = roll;
    }
    startSession() {//this is doing something by funciton .
        console.log(this.name, 'start a seasson');

    }
    designation = 'web Engineer';
}

// const kamal = new Member('kamal', 'web eng-2');
// const Rabby = new Member('Rabby Islam', 'web Eng-1');
// console.log(kamal);
// console.log(Rabby);
// Rabby.startSession();
// kamal.startSession();

class StudentCare {
    name;
    designation = 'Student care';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildRoutin(student) {
        console.log(this.name, 'Build a routin for', student);
    }
}
const jamal = new StudentCare('jamal', 'Mumbai');
console.log(jamal);
jamal.buildRoutin('Sunnyleony');