const myarr=[1,2,3,4,5]
const avengers = ["thor", "captain marvel" , "spiderman"]

console.log(myarr)
console.log(avengers)

const myarr2 = new Array(1,2,3,4,5)
console.log(myarr2)

console.log(typeof(myarr))
console.log(typeof(myarr2))

// array methods 

let b = myarr.push(6) // insert element in the end 
let a = myarr.pop() // remove element from the end 
myarr.unshift(-1) // insert an element in the front 
myarr.shift() // removes element from the front 
console.log(myarr)

console.log(myarr.includes(5)) // checks whether the given element is present in the array or not and returns true or false accordingly
console.log(myarr.indexOf(5)) // returns the index of the element if present else returns -1

const newarr = myarr.join(); // returns a string joining the elements of arr 
const newarr2 = myarr.join('*')
console.log(myarr)
console.log(newarr)
console.log(typeof(myarr))
console.log(typeof(newarr))
console.log(newarr2)

console.log(myarr.slice(2))
myarr.splice(1,0,1)
console.log(myarr)