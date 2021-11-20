'use strict';

//? Constructor functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const diego = new Person('Diego', 1998);
console.log(diego);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatic return {}

const matilda = new Person('Matilda', 2018);
const jack = new Person('Jack', 2018);
console.log(matilda, jack);

const jay = 'jay';

console.log(diego instanceof Person);
console.log(jay instanceof Person);

//? Prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  const year = new Date().getFullYear();
  console.log(year - this.birthYear);
};

diego.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(diego.__proto__);
console.log(Person.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(diego.species, matilda);

console.log(diego.hasOwnProperty('firstName'));

//? Prototupal inheritance on Build-In-Objects LECTURE
console.log(diego.__proto__);
console.log(diego.__proto__.__proto__);
console.log(diego.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 3, 3, 3, 3, 4, 5, 6, 7, 82, 1, 23, 4]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
*/

/////////////////////////////////////////////////////
//? Coding Challenge #1
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Nissan', 80);

console.log(car1);
console.log(car2);
car1.accelerate();
car1.brake();
car1.accelerate();
car1.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.accelerate();
car2.accelerate();
console.log(car1);
console.log(car2);
*/

//? ES6 Classes

// class expression
// const PersonCl = class {};

//class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

// Methodswill be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstNasme}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// PersonCl.hey();

// const jessica = new PersonCl('Jessica', 1996);
// const diego = new PersonCl('Diego Loyola', 1998);
// const walter = new PersonCl('Walter White', 1998);

// console.log(diego);
// diego.calcAge();
// console.log(diego.age);
// console.log(jessica, diego);
// diego.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstNasme}`);
// };
// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

//? Setters and Getters

// const account = {
//   owner: 'jonas',
//   movements: [200, 400, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);
// console.log(account.latest);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 1992;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1990);
// sarah.calcAge();
// console.log(sarah);

//? Coding Challenge #2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car1 = new Car('Ford', 120);
// // console.log(car1);
// console.log(car1.speedUS);
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.speedUS = 50;
// console.log(car1);

//? Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// Student.prototype.constructor = Student;
// console.log(mike);

//? Coding Challenge #3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} is going at ${this.speed} with charge of ${this.charge}`
//   );
// };

// const car1 = new EV('Tesla', 120, 50);
// car1.chargeBattery(20);
// console.log(car1);
// car1.brake();
// car1.accelerate();
// car1.accelerate();

//? Inheritance Between "Classes": ES6 Classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstNasme}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happens first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       } `
//     );
//   }
// }

// const martha = new StudentCl('Matha Jones', 2012, 'Computer Science ');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

//? Inheritance Between "Classes": Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const jay = Object.create(StudentProto);

// jay.init('Jay', 2010, 'Computer Science');
// console.log(jay);
// jay.introduce();
// jay.calcAge();

//? Another class example
//? Encapsulation: Protected properties and methods
//? Encapsulation: Private class fields and methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) Private fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3) Public methods
//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   // 4) Private methods
//   // #approveLoan(val) {
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposit(250);
// acc1.withdraw(150);
// console.log(acc1.getMovements());

// Account.helper();

// //? Chaining methods
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(215000).withdraw(5000);
// console.log(acc1.getMovements());

//? Coding Challenge #4
/*
Your tasks:

  1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
  child class of the 'CarCl' class

  2. Make the 'charge' property private

  3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
  methods of this class, and also update the 'brake' method in the 'CarCl'
  class. Then experiment with chaining!

Test data:

🔴 Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
