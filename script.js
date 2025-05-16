// let fruits = ["apple", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let digits = [1, 5, 7, 6, 8, 9];
// let a = 0;
// for (i = 0; i < 6; i++) {
//   a = a + digits[i];
// }
// console.log(a);

// let user = {
//   name: 'Alice',
//   age: 25,
//   email: 'alice@example.com',
//   school: function() {
//     return("I am a student.");
//   }
// }

// console.log(user.school())

// let book = {
//   title: 'The Richest Man in Babylon',
//   author: 'George Samuel Clason',
//   yearPublished: "1926",
//   isAvailable: true,
//   borrowBook: function() {
//     this.isAvailable = false;
//     console.log(`"${this.title}" has been borrowed.`);
//   },
// };
// console.log(book.isAvailable);
// book.borrowBook();
// console.log(book.isAvailable);

// let person = {
//   name: "Dogged",
//   age: 30,
//   city: "enugu",
//   introduce: function () {
//     console.log(
//       `"Hi, I'm ${this.name}, I'm ${this.age} years old, and I live in ${this.city}`
//     );
//   },
// };
// person.introduce();
var firstName = 'Chiedozie';
console.log(firstName)
console.log(typeof firstName)

var lastName = 'Chukwuma';
console.log(lastName)
console.log(typeof lastName)

var age = 120;
console.log(age)
console.log(typeof age)

var licenseStatus = true;
console.log(licenseStatus)
console.log(typeof licenseStatus)

var dreamJob;
console.log(dreamJob)
console.log(typeof dreamJob)

var johnAge = 30;
var markAge = 35;
var averageAge = ((johnAge + markAge)/2)
console.log("The avearge age is: " +averageAge)

var chinweAge = 36;
var preshAge = 34;
var amakaAge = 31;
var kennyAge = 29;
var ucheAge = 27;

var averageAge = ((chinweAge+preshAge+amakaAge+kennyAge+ucheAge) / 2)
console.log(averageAge)

console.log(chinweAge > ucheAge)
console.log(chinweAge < amakaAge)
console.log(kennyAge >= preshAge)
console.log(chinweAge !== ucheAge)
console.log(chinweAge <= ucheAge)
console.log(preshAge === ucheAge);

var paulWeight = 70;
var paulHeight = 1.70;
var paulBmi = (paulWeight / (paulHeight**2))
console.log(paulBmi)

var peterWeight = 80;
var peterHeight = 1.65;
var peterBmi = (peterWeight / (peterHeight**2))
console.log(peterBmi)

console.log(paulBmi >= peterBmi)