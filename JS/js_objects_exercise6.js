
////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function() {
    console.log(this.name.length)
  }
}
employee.nameLength()

// Add a method called nameLength that prints out the
// length of the employees name to the console.

///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report: function() {
    alert("Name is: " + this.name + ", Job is: " + this.job + ", Age is: " + this.age)
  }
}
employee.report()

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.

///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function() {
    console.log(this.name.split(" ")[1])
  }
}
employee.lastName()
// Add a method called lastName that prints
// out the employee's last name to the console.
