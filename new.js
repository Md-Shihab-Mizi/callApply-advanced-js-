class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
 
const heroPerson = new Person("shihab", "Mizi", 20000);
console.log(heroPerson);

const friendlyPerson = new Person("hero", "jamal", 25000);
console.log(friendlyPerson);


// old system

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1("old", "system", 1200);
console.log(oldPerson);