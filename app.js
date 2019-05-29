// let greeting = 'hello'

// let myObj = {
//   fname: 'sabrina',
//   lname: 'goldfarb',
//   city: 'houston',
//   gender: 'female',
//   age: 29
// }

// // module.exports = greeting
// module.exports = myObj


// let pi = 3.14

// let areaCircle = (r) => {
//   return pi * r * r
// }

// module.exports = areaCircle

class Person {
  constructor(fname, lname) {
    this.fname = fname
    this.lname = lname
  }

  printName() {
    console.log(`${this.fname} ${this.lname}`)
  }
}

module.exports = Person
