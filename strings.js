//String declaration 
//Method 1

let name = "Abhiraj"
let age = 21;
const contactNo = 9407310127;
console.log(typeof(name)); 
//string concatenation
console.log(`My name is ${name}. My age is ${age}, You can contact me at ${contactNo}`); 

//Method 2 
//here type of the gameName is a "object"
const gameName = new String("Rishabh")
console.log(`Hello my name is ${gameName}`) 
console.log(typeof(gameName)); 

//strings methods
let surname = "tiwari";
console.log(surname.toUpperCase()); 
console.log(surname.charAt(2));
console.log(surname.indexOf('t'));  
//while breaking the string into substrings the last string you are asking for gets ignored. 
console.log(surname.substring(0,4)); 
//slicing of the string
console.log(surname.slice(-5,-3));
