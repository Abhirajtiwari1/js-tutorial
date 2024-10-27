const array = [1,2,3,4,5];
console.log(array); 
//while creating the copy of array a shallow copy is created
/* 
shallow copies means while i am making changes in copy array changes are reflected in original too
//declaration of array using new keyword(object) 
*/
const array1 = new Array(0, 12, 34, 43);
console.log(array1);
console.log(typeof(array1));
//pop operations remove the value present at last by default 
//the unshift operation should add element at very first position
array1.unshift(9);
console.log(array1);
//the shift operation removes the elements from first position
console.log(array1.includes(8));
//to convert an array into string
const string = array1.join()
console.log(string); 
console.log(typeof(string))

const array2 = [1,2,3,4,5,6]; 
//the slice operation neglects the last range 
const slice = array2.slice(1,3);
console.log(slice); 

const splice = array2.splice(0,2);
console.log(splice); 
//the splice operation first make modifications in original array and further return 
console.log(array2) 

//concat - returns new array
const concat = array2.concat(array1);
console.log(concat)
//spread operator
console.log([...array2, ...array1]);
//data flat - to remove the nested arrays

//to convert string into array
console.log(Array.isArray("Abhiraj")); 
console.log(Array.from("Abhiraj"))