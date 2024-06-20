/* let x = 'John' + ' ' + 'Doe'
console.log(x)

let y = "5" + 2 + 3
console.log(y) */

{let text1 = 'A'
let text2 = 'B'
let result = text1 < text2
console.log(result)
}

{let text1 = '20'
let text2 = '5'
let result = text1 < text2
console.log(result)
}

let text1 = 'What a very '
text1 += 'nice day'
console.log(text1)

{let x = 10
x += 5
// x = x + 5
console.log(x) // 15
}

{let x = 10
x -= 5
// x = x -5
console.log(x) //5
}

{let x = 16 + 'Volvo'
    console.log(x) // result = 16Volvo
}

{let x = 16 + 4 + 'Volvo'
    console.log(x) // result = 20Volvo
}

{let x = 'Volvo' + 16 + 4
    console.log(x) // result = Volvo164
}

{let x // Now x is undefined
    x = 5 // Now x is a Number
    x = 'John' // Now x is a String
}

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

const cars = ["Saab", "Volvo", "BMW"] // Array

const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"} //Object

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"

let car;    // Value is undefined, type is undefined

car = undefined;    // Value is undefined, type is undefined

{let car = "";    // The value is "", the typeof is "string"
}

//Function syntax
function name(parameter1, parameter2, parameter3) {
    // code to be executed 
}

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

  // code here can NOT use carName

{const car = {type:"Fiat", model:"500", color:"white"};}

// Option 1: Create an Object
{const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};}

// Option 2: Create an Object and then add properties:
{const person = {};}

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//Option 3: Create an Object using *new Object ()* and then add properties:
const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//How to access properties:
objectName.propertyName
objectName["propertyName"]

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() { //This is a method
    return this.firstName + " " + this.lastName;
    }
}

objectName.methodName() // how to access a method

//adding a method
person.name = function () {
    return this.firstName + " " + this.lastName;
};

person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

//Ways to access an object property

// objectName.property
let age = person.age;

//objectName["property"]
{let age = person["age"];}

//objectName[expression]

{let age = person[x];}

person.nationality = "English";

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person["age"] // or: delete person.age

myObj = {
    name:"John",
    age:30,
    myCars: { // this is another object
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
    }
}

//Option 1:
myObj.myCars.car2;

//Option 2:
myObj.myCars["car2"];

//Option 3:
myObj["myCars"]["car2"];

//Option 4:
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("demo").innerHTML = person; //This will return [object Object] in HTML

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

  // Display Properties
document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Stringify Object
let myString = JSON.stringify(person);

// Display String
document.getElementById("demo").innerHTML = myString; // shows: {"name":"John","age":30,"city":"New York"}

function person(first, last, age, eye) {
    person.firstName = first;
    person.lastName = last;
    person.age = age;
    person.eyeColor = eye;
}

//default value
function person(first, last, age, eye) {
    person.firstName = first;
    person.lastName = last;
    person.age = age;
    person.eyeColor = eye;
    person.nationality = 'English';
}