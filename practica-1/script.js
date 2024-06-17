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