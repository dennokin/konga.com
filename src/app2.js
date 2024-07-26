// Introduction---------------------------------

let car = {
  colors: {
    leftColor: "blue",
    rightColor: "green",
  },
  brand: "Toyota",
  model: "V8",
  engine: "VV8",
  start: function () {
    console.log("Car has started");
  },
  stop: function () {
    console.log("Car has stopped");
  },
};

// accessing properties
console.log(car.colors.rightColor);

// calling method
car.start();

// Creating Objects---------------------------------
// (a) OBJECT LITERALS🎉

let person = {
  firstName: "Kisakye",
  lastName: "Moses",
  age: 30,
  fullNames: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullNames());

// (b) USING THE new Object()🎉
let person2 = new Object();

person2.firstName = "Kisakye";
person2.lastName = "Moses";
person2.age = 30;
person2.fullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person2.fullName());

// (c) Accessing and Modifying Object Properties🎉
let student = {
  id: 1,
  name: "Denis",
  grade: "A+",
};

// Accessing properties
console.log(student.name); // Dot Notation
console.log(student["grade"]); // Bracket Notation

// Modifying properties
student.grade = "B+";
console.log(student["grade"]); // Bracket Notation

// (d) Adding and Deleting Properties🎉
let song = {
  title: "Memories",
  artist: "Maroon 5 ft Cardi B",
};

// Adding a property
song.year = 2019;
// console.log(song.year);

// Deleting a property
delete song.title;
// console.log(song.title);

// (e) Object Methods and `this` Keyword🎉
let calculator = {
  numb1: 0,
  numb2: 0,
  add: function () {
    return this.numb1 + this.numb2;
  },
  subtract: function () {
    return this.numb1 - this.numb2;
  },
};

calculator.numb1 = 5;
calculator.numb2 = 3;

//  what will the output be for;
// console.log(calculator.add()); // 8
// console.log(calculator.subtract()); // 2

// (f) Prototypes and Inheritance🎉

function Bio(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// prototyping

Bio.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

let person3 = new Bio("John", "Doe");
console.log(person3);
console.log(person3.fullName());
