//prompts
var firstName = prompt("First name: ")
var lastName = prompt("Last name: ")
var age = prompt("How old are you? ")
var height = prompt("Your height: ")
var petName = prompt("What is your pet name:")

alert("Thank you fo the information!")

//logic

//Four condition
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;


//name condition
if (firstName[0] === lastName[0]){
  nameCond = true;
}else {
  nameCond = false;
}

//age condition
if (age > 20 && age < 30) {
  ageCond = true;
}else {
  ageCond = false;
}

//age condition
if (height >= 170) {
  heightCond = true;
}else {
  heightCond = false;
}

//pet condition
if (petName[petName.length -1]==="y") {
  petCond = true
}else {
  petCond = false
}

// check all conditions

if (nameCond & ageCond & heightCond & petCond){
  console.log("You have guessed who is the spy")
}else {
  console.log ("Not right")
}
