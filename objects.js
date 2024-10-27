//singleton 
//objects literals 
const mySymbol = Symbol("mykey1")
const JSUser = {
    name: 'John',
    age: 25,
    email: 'abhirajtiwari189@gmail.com' ,
    "fullname": "AbhirajTiwari" ,
    //symbol
    [mySymbol]: "myKey1"
} 
console.log(JSUser); 
//the best practice to access the object created
console.log(JSUser["name"]); 
console.log(JSUser.fullname);  
console.log(typeof(mySymbol));   

//object freeze 
const details = {
    name: "Abhiraj",
    email: "abhirajtiwari189@gmail.com"
} 
details["email"] = "tumashankar398@gmail.com"; 
console.log(details);
Object.freeze(details);
details["email"] = "vanshika343@gmail.com";
console.log(details);  


//singleton declaration of the objects
const user ={}
user.firstName = "Abhiraj" 
user.contactNo = 9407310127
user.email = "abhirajtiwari189@gmail.com"
console.log(user);