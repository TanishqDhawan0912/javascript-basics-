const mysym = Symbol("key1") // to declare a symbol


const JSUser ={
    name : "tanishq",
    "full name" : "tanishq dhawan",
    location : "kaithal",
    [mysym] : "mykey1",
    email : "tanishqdhawan09gmail.com",
    isloggedin : false ,
    IsAvailable : ['Monday' , 'Tuesday']
}



// console.log(JSUser.name)


// console.log(JSUser.full name) // most used way 
// console.log (JSUser["full name"]) // most accurate way

// console.log(JSUser["name"]) 
// console.log(JSUser[mysym]);

// console.log(JSUser);
// JSUser.name = "Tanishq"
// console.log(JSUser);

// console.log(JSUser.IsAvailable[0]) // to get the nth element from array in object 


// Object.freeze(JSUser) // to stop changes to act in object 
// JSUser.email = "tanishqdhawan@google.com"
// console.log(JSUser)


// JSUser.age = 26 // to declare something new in the already made project
// console.log(JSUser);

// JSUser.language = function(){  
//     console.log("speaks hindi")
// }

// JSUser.language =function(){
//     console.log(`speaks hindi in ${this.location}`)
// }

// console.log(JSUser.language())