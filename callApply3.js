// bind object etar mani hoche ekta functuin onno gula te na likha but same kaj korbe


const normalPerson = {
    firstName : "shihab",
    lastName : "Mizi",
    salary  :15000 ,
    getFullName: function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill : function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
  
}
// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);


const heroPerson = {
    firstName : 'hero',
    lastName : 'balam',
    salary: 25000
}

const friendlyPerson = {
    firstName : 'hero',
    lastName : 'golam',
    salary: 25000
}

// // normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// // console.log(normalPerson.salary);


// const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendChargeBill(5000);
// console.log(friendlyPerson.salary);




/* uporer eigulo arukto sohoj kore likha jay => */

// using call 


normalPerson.chargeBill.call(heroPerson, 900);
console.log(heroPerson.salary);



// using apply

normalPerson.chargeBill.apply(friendlyPerson,[ 600]);
console.log(friendlyPerson.salary);




